import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

/**
 * Root /dashboard route.
 * Reads the real session server-side and redirects to the correct
 * role-based dashboard.  Falls back to /auth/signin if not logged in.
 */
export default async function DashboardRootPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/auth/signin");
  }

  const role = (session.user as typeof session.user & { role?: string }).role;

  if (role === "owner") redirect("/dashboard/owner");
  if (role === "doctor") redirect("/dashboard/doctor");

  // Default: receptionist (or any unknown role)
  redirect("/dashboard/receptionist");
}
