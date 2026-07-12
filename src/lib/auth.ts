import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

/**
 * Shared MongoDB client (reused across hot-reloads in dev).
 * Connection string and DB name come from environment variables.
 */
const uri = process.env.MONGODB_URI ?? "mongodb://localhost:27017";

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClient?: MongoClient;
  };

  if (!globalWithMongo._mongoClient) {
    globalWithMongo._mongoClient = new MongoClient(uri);
  }
  client = globalWithMongo._mongoClient;
} else {
  client = new MongoClient(uri);
}

const db = client.db(process.env.MONGODB_DB ?? "roothealth");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
    // Transactions disabled to prevent 'Topology is closed' issues and allow direct connections
    transaction: false,
  }),
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "receptionist",
        input: true,
      },
    },
  },
});
