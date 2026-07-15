"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // 1. Safe access to user session data
  const { data: session, isPending } = useSession();

  const user = session?.user;

  // Safely cast or read the role property from your user data
  const role = user ? (user as any).role : undefined;

  // FIXED: Removed the invalid ": string" syntax and added optional chaining
  // console.log("Logged User Name:", user?.name);
  // console.log("Extracted Role:", role);

  // 2. Real Sign Out using Better Auth client
  const handleSignOut = async () => {
    try {
      await signOut({
        fetchOptions: {
          onSuccess: () => {
            setIsProfileOpen(false);
            setIsMenuOpen(false);
            router.push("/"); // Redirect after successful logout
          },
        },
      });
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  // 3. Navigation links per real role mapping
  const getNavLinks = () => {
    if (!user) {
      return [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ];
    }

    switch (role) {
      case "admin":
        return [
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard/owner" },
          // { label: "Doctors", href: "/dashboard/owner/doctors" },
          // { label: "Patients", href: "/dashboard/owner/patients" },
          // { label: "Revenue", href: "/dashboard/owner/revenue" },
          // { label: "Tests", href: "/dashboard/owner/tests" },
        ];
      case "receptionist":
        return [
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard/receptionist" },
          // { label: "New Patient", href: "/dashboard/receptionist/new-patient" },
          // { label: "Assign Doctor", href: "/dashboard/receptionist/assign" },
          // { label: "Tests", href: "/dashboard/receptionist/tests" },
        ];
      case "doctor":
        return [
          { label: "Home", href: "/" },
          { label: "Dashboard", href: "/dashboard/doctor" },
          // { label: "My Patients", href: "/dashboard/doctor/patients" },
        ];
      default:
        return [{ label: "Dashboard", href: `/dashboard/${role || "user"}` }];
    }
  };

  const navLinks = getNavLinks();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#070714]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tight text-white">
            Root
          </span>
          <span className="text-2xl font-black tracking-tight text-blue-500">
            Health
          </span>
        </Link>

        {/* DESKTOP CENTER LINKS */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SIDE - ACTIONS */}
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2">
              {isPending ? (
                <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
              ) : !user ? (
                <div className="flex items-center gap-6">
                  <Link
                    href="/doctor-apply"
                    className="text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    Doctor Apply
                  </Link>
                  <span className="h-4 w-px bg-white/10" />
                  <Link
                    href="/auth/signin"
                    className="text-sm font-medium text-gray-300 transition hover:text-white"
                  >
                    Login
                  </Link>
                </div>
              ) : (
                /* Authenticated Profile Layout Toggle */
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white uppercase">
                      {user.name?.charAt(0) ?? "U"}
                    </span>
                    <span>{user.name}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {isProfileOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsProfileOpen(false)}
                      />
                      <div className="absolute right-0 mt-3 w-56 origin-top-right rounded-xl border border-white/5 bg-[#0c0c1f] p-2 shadow-2xl z-20">
                        <div className="flex items-center gap-3 border-b border-white/5 px-3 py-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white uppercase">
                            {user.name?.charAt(0) ?? "U"}
                          </span>
                          <div className="flex flex-col truncate">
                            <span className="text-sm font-semibold text-white truncate">
                              {user.name}
                            </span>
                            <span className="text-xs text-gray-500 truncate">
                              {user.email}
                            </span>
                          </div>
                        </div>

                        {role && (
                          <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {role} Account
                          </div>
                        )}

                        <Link
                          href={`/dashboard/${role || "user"}/profile`}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 transition"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          My Profile
                        </Link>
                        <Link
                          href={`/dashboard/${role || "user"}/settings`}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 transition"
                          onClick={() => setIsProfileOpen(false)}
                        >
                          Settings
                        </Link>
                        <div className="my-1 border-t border-white/5" />
                        <button
                          onClick={handleSignOut}
                          className="w-full text-left block rounded-lg px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 transition"
                        >
                          Logout
                        </button>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {isMenuOpen && (
        <div className="border-t border-white/5 bg-[#070714] md:hidden">
          <div className="space-y-3 px-4 py-6">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-gray-300 transition hover:bg-white/5 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Management */}
            <div className="border-t border-white/5 pt-4">
              <div className="flex flex-col gap-3">
                {isPending ? (
                  <div className="h-4 w-20 animate-pulse rounded bg-white/10" />
                ) : !user ? (
                  <>
                    <Link
                      href="/doctor-apply"
                      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Doctor Apply
                    </Link>
                    <Link
                      href="/auth/signin"
                      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-3 px-4 py-2">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white uppercase">
                        {user.name?.charAt(0) ?? "U"}
                      </span>
                      <div className="flex flex-col truncate">
                        <span className="text-sm font-semibold text-white truncate">
                          {user.name}
                        </span>
                        <span className="text-xs text-gray-500 truncate">
                          {user.email}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/dashboard/${role || "user"}/profile`}
                      className="block px-4 py-2 text-base font-medium text-gray-300 hover:text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Profile Settings
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="block w-full rounded-lg bg-red-500/10 px-4 py-2.5 text-left text-base font-semibold text-red-400"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
