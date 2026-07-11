import { DashboardPage } from "@/components/Dashboard/DashboardPage";
import { DOCTORS } from "@/lib/demo-data";

export default function AssignDoctorPage() {
  return (
    <DashboardPage title="Assign Doctor" description="Assign patients to available doctors">
      <div className="space-y-3">
        {DOCTORS.map((doc) => (
          <div key={doc.name} className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 p-4">
            <div>
              <p className="font-medium text-white">{doc.name}</p>
              <p className="text-sm text-gray-400">{doc.specialty}</p>
            </div>
            <button
              className={`rounded-lg px-4 py-2 text-sm font-medium ${doc.status === "Active" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white/5 text-gray-500 cursor-not-allowed"}`}
              disabled={doc.status !== "Active"}
            >
              {doc.status === "Active" ? "Assign" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
    </DashboardPage>
  );
}