import { DashboardPage } from "@/components/Dashboard/DashboardPage";

export default function DoctorPatientsPage() {
  const patients = [
    { name: "John Smith", age: 45, condition: "Hypertension", lastVisit: "2024-01-15" },
    { name: "Sarah Davis", age: 27, condition: "Arrhythmia", lastVisit: "2024-01-12" },
    { name: "Robert Lee", age: 63, condition: "Post-Surgery", lastVisit: "2024-01-05" },
  ];

  return (
    <DashboardPage title="My Patients" description="Patients under your care">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase text-gray-500">
              <th className="pb-3 pr-4 font-semibold">Name</th>
              <th className="pb-3 pr-4 font-semibold">Age</th>
              <th className="pb-3 pr-4 font-semibold">Condition</th>
              <th className="pb-3 font-semibold">Last Visit</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.name} className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white">{p.name}</td>
                <td className="py-3 pr-4 text-gray-400">{p.age}</td>
                <td className="py-3 pr-4 text-gray-400">{p.condition}</td>
                <td className="py-3 text-gray-400">{p.lastVisit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardPage>
  );
}
