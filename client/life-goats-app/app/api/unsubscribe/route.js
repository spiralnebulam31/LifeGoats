/**
 * This file is responsible for handling the POST request to unsubscribe a user from the subscription list.
 * It receives the user's email from the request body (the input of the user in the frontend form),
 * validates the input, and updates the user in the subscriptions collection in the database to mark them as unsubscribed.
 */
import clientPromise from "@/lib/mongodb";
import transporter from "@/lib/nodemailer"; // Import Nodemailer transporter

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("life-goats");
    const collection = db.collection("subscriptions");

    // Mark user as unsubscribed
    const result = await collection.updateOne(
      { email },
      { $set: { unsubscribedAt: new Date() } }
    );

    if (result.matchedCount === 0) {
      return new Response(
        JSON.stringify({ message: "Email not found." }),
        { status: 404 }
      );
    }

    // Send an email notification to the admin (or you) about the unsubscription
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: process.env.EMAIL_USER, // recipient address
      subject: "User Unsubscribed", // email subject
      text: `User with email ${email} has unsubscribed.`, // email content
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "We're sad to see you go, but we respect your request. You have successfully unsubscribed!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return new Response(
      JSON.stringify({ message: "Internal server error" }),
      { status: 500 }
    );
  }
}
