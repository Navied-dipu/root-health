import { DashboardPage } from "@/components/Dashboard/DashboardPage";

export default function OwnerSettingsPage() {
  return (
    <DashboardPage title="Settings" description="Manage your account and clinic settings">
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-300">Clinic Name</label>
          <input type="text" defaultValue="RootHealth Clinic" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-300">Email</label>
          <input type="email" defaultValue="sarah.chen@roothealth.com" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Save Changes</button>
      </div>
    </DashboardPage>
  );
}
