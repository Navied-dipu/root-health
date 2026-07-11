import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { OWNER_STATS } from "@/lib/demo-data";

export default function OwnerDashboardPage() {
  return (
    <DashboardPage
      title="Owner Dashboard"
      description="Overview of clinic operations and key metrics"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {OWNER_STATS.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/5 bg-white/5 p-4">
            <p className="text-xs text-gray-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-white">{stat.value}</p>
            <p
              className={`mt-1 text-xs ${
                stat.trend === "up"
                  ? "text-green-400"
                  : "text-gray-400"
              }`}
            >
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
}