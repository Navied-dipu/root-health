import { DashboardPage } from "@/components/Dashboard/DashboardPage";

export default function NewPatientPage() {
  return (
    <DashboardPage title="New Patient" description="Register a new patient">
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" placeholder="Enter patient name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300">Age</label>
            <input type="number" placeholder="Enter age" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300">Phone</label>
            <input type="tel" placeholder="Enter phone number" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input type="email" placeholder="Enter email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white" />
          </div>
        </div>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">Register Patient</button>
      </div>
    </DashboardPage>
  );
}
