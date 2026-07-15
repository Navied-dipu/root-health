import { serverFetch, serverMutation } from "../core/server";

export const getPatientsData = async () => {
  return await serverFetch<any[]>("/api/patients");
};

export const getPatientsByDoctor = async (doctorName: string) => {
  return await serverFetch<any[]>(`/api/patients?doctor=${encodeURIComponent(doctorName)}`);
};
// Define the shape of the patient data you are sending


// This must match your serverMutation import path

export interface NewPatient {
  name: string;
  age: number;
  phone?: string;
  email?: string;
}

export interface CreatePatientResponse {
  message: string;
  patientId: string;
  patient: NewPatient & { _id: string };
}

/**
 * Sends a POST request to register a new patient
 */
export const createPatient = async (patientData: NewPatient): Promise<CreatePatientResponse> => {
  const response = await serverMutation("/api/patients", patientData, "POST");

  // 1. If the response failed, read the error JSON and throw
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || "Failed to create patient");
  }

  // 2. Await the successful JSON parsing before returning
  const data = await response.json();
  return data;
};