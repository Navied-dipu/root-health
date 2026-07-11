import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { MEDICAL_TESTS as tests } from "@/lib/demo-data";

export default function OwnerTestsPage() {
  return (
    <DashboardPage title="Tests" description="Manage available medical tests">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase text-gray-500">
              <th className="pb-3 pr-4 font-semibold">Test Name</th>
              <th className="pb-3 pr-4 font-semibold">Category</th>
              <th className="pb-3 pr-4 font-semibold">Price</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t) => (
              <tr key={t.name} className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white">{t.name}</td>
                <td className="py-3 pr-4 text-gray-400">{t.category}</td>
                <td className="py-3 pr-4 text-gray-400">${t.price}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${t.status === "Available" ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPage>
  );
}
