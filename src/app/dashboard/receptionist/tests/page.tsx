import { DashboardPage } from "@/components/Dashboard/DashboardPage";

export default function ReceptionistTestsPage() {
  const tests = [
    { patient: "John Smith", test: "Blood Count", doctor: "Dr. Rodriguez", status: "Pending" },
    { patient: "Mary Johnson", test: "X-Ray", doctor: "Dr. Kim", status: "In Progress" },
    { patient: "David Brown", test: "MRI", doctor: "Dr. Wilson", status: "Completed" },
  ];

  return (
    <DashboardPage title="Tests" description="Manage and track patient tests">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase text-gray-500">
              <th className="pb-3 pr-4 font-semibold">Patient</th>
              <th className="pb-3 pr-4 font-semibold">Test</th>
              <th className="pb-3 pr-4 font-semibold">Doctor</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t) => (
              <tr key={t.patient} className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white">{t.patient}</td>
                <td className="py-3 pr-4 text-gray-400">{t.test}</td>
                <td className="py-3 pr-4 text-gray-400">{t.doctor}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${t.status === "Completed" ? "bg-green-500/10 text-green-400" : t.status === "In Progress" ? "bg-blue-500/10 text-blue-400" : "bg-yellow-500/10 text-yellow-400"}`}>
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
