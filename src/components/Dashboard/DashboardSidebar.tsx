"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDemoRole } from "@/lib/demo-role-context";

// Inline SVG icon components
function IconHome() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconCreditCard() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  );
}

function IconStethoscope() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  );
}

function IconActivity() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function IconGear() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

const ICONS = {
  home: IconHome,
  users: IconUsers,
  fileText: IconFileText,
  creditCard: IconCreditCard,
  stethoscope: IconStethoscope,
  activity: IconActivity,
  gear: IconGear,
};

type IconName = keyof typeof ICONS;

interface NavItem {
  icon: IconName;
  href: string;
  label: string;
}

export function DashboardSidebar() {
  const { role } = useDemoRole();
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Navigation links per role
  const ownerNavLinks: NavItem[] = [
    { icon: "home", href: "/dashboard/owner", label: "Dashboard" },
    { icon: "users", href: "/dashboard/owner/doctors", label: "Doctors" },
    { icon: "users", href: "/dashboard/owner/patients", label: "Patients" },
    { icon: "creditCard", href: "/dashboard/owner/revenue", label: "Revenue" },
    { icon: "fileText", href: "/dashboard/owner/tests", label: "Tests" },
    { icon: "gear", href: "/dashboard/owner/settings", label: "Settings" },
  ];

  const receptionistNavLinks: NavItem[] = [
    { icon: "home", href: "/dashboard/receptionist", label: "Dashboard" },
    { icon: "users", href: "/dashboard/receptionist/new-patient", label: "New Patient" },
    { icon: "stethoscope", href: "/dashboard/receptionist/assign", label: "Assign Doctor" },
    { icon: "fileText", href: "/dashboard/receptionist/tests", label: "Tests" },
    { icon: "gear", href: "/dashboard/receptionist/settings", label: "Settings" },
  ];

  const doctorNavLinks: NavItem[] = [
    { icon: "home", href: "/dashboard/doctor", label: "Dashboard" },
    { icon: "activity", href: "/dashboard/doctor/patients", label: "My Patients" },
    { icon: "gear", href: "/dashboard/doctor/settings", label: "Settings" },
  ];

  const navLinksMap: Record<string, NavItem[]> = {
    owner: ownerNavLinks,
    receptionist: receptionistNavLinks,
    doctor: doctorNavLinks,
  };

  const activeRole = (role as string) || "doctor";
  const navItems = navLinksMap[activeRole] || doctorNavLinks;

  const navContent = (
    <nav className="flex flex-col gap-1">
      <div className="mb-4 px-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          {activeRole} Panel
        </h2>
      </div>
      {navItems.map((item) => {
        const Icon = ICONS[item.icon];
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-500/10 text-blue-400"
                : "text-gray-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            <Icon />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-64 shrink-0 border-r border-white/5 bg-[#0a0a1a] p-4 lg:block">
        {navContent}
      </aside>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg lg:hidden"
        aria-label="Toggle Sidebar"
      >
        {isMobileOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Sidebar Drawer */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="fixed left-0 top-0 z-50 h-full w-64 border-r border-white/5 bg-[#0a0a1a] p-4 lg:hidden">
            <div className="mb-6 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white">Root</span>
                <span className="text-xl font-black text-blue-500">Health</span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="rounded-lg p-1 text-gray-400 hover:bg-white/5 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {navContent}
          </aside>
        </>
      )}
    </>
  );
}