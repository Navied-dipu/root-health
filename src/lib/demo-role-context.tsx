"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { DEMO_USERS, type RoleKey } from "@/lib/demo-data";

export type Role = RoleKey | null;

interface DemoRoleContextType {
  currentRole: Role;
  setCurrentRole: (role: Role) => void;
  user: (typeof DEMO_USERS)[RoleKey] | null;
  role: string | undefined;
}

const DemoRoleContext = createContext<DemoRoleContextType | undefined>(undefined);

export function DemoRoleProvider({ children }: { children: ReactNode }) {
  const [currentRole, setCurrentRole] = useState<Role>("receptionist");
  const user = currentRole ? DEMO_USERS[currentRole] : null;
  const role = user?.role;

  return (
    <DemoRoleContext.Provider value={{ currentRole, setCurrentRole, user, role }}>
      {children}
    </DemoRoleContext.Provider>
  );
}

export function useDemoRole() {
  const ctx = useContext(DemoRoleContext);
  if (!ctx) {
    throw new Error("useDemoRole must be used within a DemoRoleProvider");
  }
  return ctx;
}