/**
 * This file is responsible for handling the POST request to subscribe a user to the newsletter.
 * It receives the user's name and email from the request body (the input of the user in the frontend form),
 * validates the input, and inserts the user into the subscriptions collection in the database.
 */
import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ message: "Name and email are required." }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("life-goats");
    const collection = db.collection("subscriptions");

    await collection.insertOne({ name, email, subscribedAt: new Date() });

    return new Response(JSON.stringify({ message: "Successfully subscribed! From now on you will be receiving the Life Goats newsletter ;)" }), { status: 200 });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
