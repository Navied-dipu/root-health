import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { getPatientsByDoctor } from "@/lib/api/patients";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DoctorPatientsPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session?.user) {
    redirect("/auth/signin");
  }

  const doctorName = session.user.name;
  const patients = await getPatientsByDoctor(doctorName) || [];
  const patientsList = Array.isArray(patients) ? patients : [];

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
            {patientsList.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-400">
                  No patients assigned yet.
                </td>
              </tr>
            ) : (
              patientsList.map((p) => (
                <tr key={p._id || p.name} className="border-b border-white/5">
                  <td className="py-3 pr-4 font-medium text-white">{p.name}</td>
                  <td className="py-3 pr-4 text-gray-400">{p.age}</td>
                  <td className="py-3 pr-4 text-gray-400">{p.condition || "N/A"}</td>
                  <td className="py-3 text-gray-400">{p.lastVisit || "N/A"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </DashboardPage>
  );
}
