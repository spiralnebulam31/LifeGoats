import clientPromise from "@/lib/mongodb";
import transporter from "@/lib/nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate required fields
    if (!email) {
      return new Response(
        JSON.stringify({ message: "Email is required." }),
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("life-goats");
    const collection = db.collection("subscriptions");

    // Check if the user exists
    const existingUser = await collection.findOne({ email });

    if (!existingUser) {
      return new Response(
        JSON.stringify({ message: "This email is not subscribed to our newsletter." }),
        { status: 200 }
      );
    }

    // Remove the user from the database
    await collection.deleteOne({ email });

    // Send an email notification to the admin about the unsubscription
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Newsletter Unsubscription",
      text: `${email} has unsubscribed from the newsletter.`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Successfully unsubscribed! You will no longer receive the Life Goats newsletter." }),
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