import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { DOCTORS as doctors } from "@/lib/demo-data";

export default function OwnerDoctorsPage() {
  return (
    <DashboardPage title="Doctors" description="Manage all doctors in your clinic">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/5 text-xs uppercase text-gray-500">
              <th className="pb-3 pr-4 font-semibold">Name</th>
              <th className="pb-3 pr-4 font-semibold">Specialty</th>
              <th className="pb-3 pr-4 font-semibold">Patients</th>
              <th className="pb-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc) => (
              <tr key={doc.name} className="border-b border-white/5">
                <td className="py-3 pr-4 font-medium text-white">{doc.name}</td>
                <td className="py-3 pr-4 text-gray-400">{doc.specialty}</td>
                <td className="py-3 pr-4 text-gray-400">{doc.patients}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      doc.status === "Active"
                        ? "bg-green-500/10 text-green-400"
                        : "bg-yellow-500/10 text-yellow-400"
                    }`}
                  >
                    {doc.status}
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