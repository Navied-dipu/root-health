import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { getDoctorsData } from "@/lib/api/Doctors";

export default async function OwnerDoctorsPage() {
  const doctors = await getDoctorsData();
  // IMPORTANT: Since this is a Server Component,
  // this log will appear in your TERMINAL (terminal running npm run dev), NOT the browser console!
  // console.log("Fetched Doctors Data on Server:", doctors);
  const doctorsList = Array.isArray(doctors) ? doctors : [];
  return (
    <DashboardPage
      title="Doctors"
      description="Manage all doctors in your clinic"
    >
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
            {doctorsList.map((doc) => (
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
