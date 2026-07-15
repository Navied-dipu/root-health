import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { DOCTOR_STATS } from "@/lib/demo-data";

export default function DoctorDashboardPage() {
  return (
    <DashboardPage title="Doctor Dashboard" description="Your patients and schedule overview">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DOCTOR_STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
}