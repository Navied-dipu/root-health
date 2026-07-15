"use client";

import { useSession } from "@/lib/auth-client";

interface DashboardPageProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function DashboardPage({ title, description, children }: DashboardPageProps) {
  const { data: session } = useSession();
  const user = session?.user as (NonNullable<typeof session> extends { user: infer U } ? U : any) & { role?: string } | undefined;
  const role = user?.role;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          {description && (
            <p className="mt-1 text-sm text-gray-400">{description}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-sm font-bold text-white">
            {user?.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={user.image}
                alt={user.name || "User"}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              (user?.name?.charAt(0).toUpperCase() || "?")
            )}
          </span>
          <div className="hidden flex-col sm:flex">
            <span className="text-sm font-semibold text-white">
              {user?.name || "Guest"}
            </span>
            <span className="text-xs text-gray-500 capitalize">
              {role || "guest"}
            </span>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="rounded-2xl border border-white/5 bg-[#0c0c1f] p-6">
        {children || (
          <p className="text-sm text-gray-400">
            This is the {title} page. Content will be displayed here.
          </p>
        )}
      </div>
    </div>
  );
}