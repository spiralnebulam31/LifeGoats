import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return new Response(JSON.stringify({ message: "Name and email are required." }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("life-goats"); // Replace with your database name
    const collection = db.collection("subscriptions");

    await collection.insertOne({ name, email, subscribedAt: new Date() });

    return new Response(JSON.stringify({ message: "Successfully subscribed!" }), { status: 200 });
  } catch (error) {
    console.error("Error subscribing user:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
  }
}
