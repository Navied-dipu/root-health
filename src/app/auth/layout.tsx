import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070714] text-white">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

      {/* Top logo bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 lg:px-8">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-2xl font-black tracking-tight text-white">
            Root
          </span>
          <span className="text-2xl font-black tracking-tight text-blue-500">
            Health
          </span>
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-gray-400 transition hover:text-white"
        >
          Back to home
        </Link>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex min-h-[calc(100vh-160px)] items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer trust badge */}
      <footer className="relative z-10 flex items-center justify-center gap-2 px-6 py-6 text-xs text-gray-500">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span>Protected by RootHealth Secure Authentication</span>
      </footer>
    </div>
  );
}