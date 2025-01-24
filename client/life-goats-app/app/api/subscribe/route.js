/**
 * This file is responsible for handling the POST request to subscribe a user to the newsletter.
 * It receives the user's name and email from the request body (the input of the user in the frontend form),
 * validates the input, and inserts the user into the subscriptions collection in the database.
 */
import clientPromise from "@/lib/mongodb";
import transporter from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, heardAboutUs, privacyPolicyAgreed } = body;

    // Validate required fields
    if (!name || !email || !heardAboutUs) {
      return new Response(
        JSON.stringify({ message: "All fields are required." }),
        { status: 400 }
      );
    }

    // Check if the privacy policy is agreed to
    if (!privacyPolicyAgreed) {
      return new Response(
        JSON.stringify({ message: "You must agree to the privacy policy to subscribe." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("life-goats");
    const collection = db.collection("subscriptions");

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return new Response(
        JSON.stringify({ message: "You are already subscribed to the newsletter." }),
        { status: 200 } // Use 200 status since this is not an error
      );
    }

    // If the user doesn't exist, insert a new subscription
    await collection.insertOne({
      name,
      email,
      heardAboutUs,
      privacyPolicyAgreed: true, // Ensure it's stored as true
      subscribedAt: new Date(),
    });

    // Send an email notification to the admin (or you) about the new subscription
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: process.env.EMAIL_USER, // recipient address
      subject: "New Subscriber", // email subject
      text: `New subscription from ${name} (${email}).`, // email content
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Successfully subscribed! From now on you will be receiving the Life Goats newsletter ;)" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing user:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
