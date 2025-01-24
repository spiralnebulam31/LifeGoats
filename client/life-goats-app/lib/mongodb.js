/**
 * mongodb.js: Manages MongoDB connection and database initialization
 */
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

// Ensure MONGODB_URI is set
if (!process.env.MONGODB_URI) {
  console.error("MONGODB_URI not found in environment variables");
  throw new Error("Please add your MongoDB URI to .env.local");
} else {
  console.log("MONGODB_URI:", process.env.MONGODB_URI);
}

// Create a client instance (reuse in development for hot-reloading)
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Database and Collection Initialization
async function initializeDatabase() {
  const client = await clientPromise;
  const db = client.db("life-goats");
  const collectionName = "subscriptions";

  try {
    // Create collection with schema validation
    const collections = await db.listCollections({ name: collectionName }).toArray();
    if (collections.length === 0) {
      await db.createCollection(collectionName, {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "subscribedAt"],
            properties: {
              name: {
                bsonType: "string",
                description: "Name must be a string and is required.",
              },
              email: {
                bsonType: "string",
                pattern: "^.+@.+$", // Basic email regex
                description: "Email must be a valid email string and is required.",
              },
              heardAboutUs: {
                bsonType: "string",
                description: "Source must be a string.",
              },
              subscribedAt: {
                bsonType: "date",
                description: "SubscribedAt must be a date and is required.",
              },
              privacyPolicyAgreed: {
                bsonType: "bool",
                description: "PrivacyPolicyAgreed must be a boolean.",
              }
            },
          },
        },
        validationLevel: "strict",
        validationAction: "error",
      });
      console.log(`Collection '${collectionName}' created with schema validation.`);
    } else {
      console.log(`Collection '${collectionName}' already exists.`);
    }

    // Ensure indexes exist
    const collection = db.collection(collectionName);
    await collection.createIndex({ email: 1 }, { unique: true });
    console.log("Index on 'email' created or already exists.");
  } catch (err) {
    console.error("Error initializing database:", err);
  }
}

// Initialize database setup once
initializeDatabase();

export default clientPromise;
