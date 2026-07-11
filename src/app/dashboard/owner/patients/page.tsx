import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { PATIENTS as patients } from "@/lib/demo-data";

export default function OwnerPatientsPage() {
  return (
    <DashboardPage title="Patients" description="View and manage all patients">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase text-gray-500">
              <th className="pb-3 pr-4 font-semibold">Name</th>
              <th className="pb-3 pr-4 font-semibold">Age</th>
              <th className="pb-3 pr-4 font-semibold">Assigned Doctor</th>
              <th className="pb-3 font-semibold">Last Visit</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.name} className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white">{p.name}</td>
                <td className="py-3 pr-4 text-gray-400">{p.age}</td>
                <td className="py-3 pr-4 text-gray-400">{p.doctor}</td>
                <td className="py-3 text-gray-400">{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPage>
  );
}
