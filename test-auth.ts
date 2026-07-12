import { auth } from "./src/lib/auth";

async function main() {
  try {
    console.log("Trying to sign up user...");
    const res = await auth.api.signUpEmail({
      body: {
        email: "test@example.com",
        password: "password123!",
        name: "Test User",
      },
    });
    console.log("Success:", res);
  } catch (e) {
    console.error("Error signing up:", e);
  } finally {
    process.exit(0);
  }
}

main();
