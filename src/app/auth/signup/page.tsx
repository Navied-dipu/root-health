"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  UserPlus,
  Loader2,
} from "lucide-react";
import { signUp } from "@/lib/auth-client";

type Role = "doctor" | "receptionist";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("receptionist");
  const [agree, setAgree] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Form validations
    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (!agree) {
      setError("Please accept the terms to continue.");
      return;
    }

    setIsLoading(true);

  // Note: If you are using a third-party auth provider like Auth.js/NextAuth or Supabase, 
  // ensure their backend settings are also updated to permit short/simple passwords.
    try {
      const { error: signUpError } = await signUp.email({
        name,
        email,
        password,
        role,
      } as Parameters<typeof signUp.email>[0] & { role: string });

      if (signUpError) {
        setError(signUpError.message ?? "Failed to create account.");
        setIsLoading(false);
        return;
      }

      router.push("/");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const roles: { value: Role; label: string; description: string }[] = [
    { value: "doctor", label: "Doctor", description: "Manage patients & records" },
    { value: "receptionist", label: "Receptionist", description: "Front desk operations" },
  ];

  return (
    <div className="rounded-2xl border border-white/5 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-white">Create your account</h1>
        <p className="mt-2 text-sm text-gray-400">
          Join RootHealth and get started in minutes
        </p>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-6 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Role selector */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            I am a
          </label>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((r) => (
              <button
                key={r.value}
                type="button"
                onClick={() => setRole(r.value)}
                className={`rounded-xl border px-3 py-3 text-center transition ${
                  role === r.value
                    ? "border-blue-500 bg-blue-500/10 text-white"
                    : "border-white/10 bg-[#0c0c1f] text-gray-400 hover:border-white/20"
                }`}
              >
                <span className="block text-sm font-semibold">{r.label}</span>
                <span className="mt-0.5 block text-[10px] text-gray-500">
                  {r.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            Full name
          </label>
          <div className="relative">
            <User className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full rounded-xl border border-white/10 bg-[#0c0c1f] py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            Email address
          </label>
          <div className="relative">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-white/10 bg-[#0c0c1f] py-3 pl-11 pr-4 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            Password
          </label>
          <div className="relative">
            <Lock className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-xl border border-white/10 bg-[#0c0c1f] py-3 pl-11 pr-11 text-sm text-white placeholder-gray-600 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 transition hover:text-gray-300"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-2">
          <input
            id="terms"
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-white/10 bg-[#0c0c1f] text-blue-600 focus:ring-blue-500/20"
          />
          <label htmlFor="terms" className="text-sm text-gray-400">
            I agree to the{" "}
            <Link href="/terms" className="font-medium text-blue-400 hover:text-blue-300">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="font-medium text-blue-400 hover:text-blue-300">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Creating account...
            </>
          ) : (
            <>
              <UserPlus className="h-5 w-5" />
              Create account
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="my-6 flex items-center gap-4">
        <div className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-gray-500">OR</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10"
        >
          Google
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-white/10"
        >
          Microsoft
        </button>
      </div>

      {/* Switch to signin */}
      <p className="mt-8 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/auth/signin"
          className="font-semibold text-blue-400 transition hover:text-blue-300"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}