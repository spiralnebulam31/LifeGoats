import clientPromise from "../lib/mongodb.js";

(async () => {
  try {
    console.log("Testing MongoDB connection...");

    const client = await clientPromise;
    const db = client.db(); // Connect to the default database
    console.log("Successfully connected to MongoDB!");

    const databases = await client.db().admin().listDatabases();
    console.log("Available databases:", databases.databases.map((db) => db.name));

    process.exit(0); // Exit script on success
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit script with failure code
  }
})();
