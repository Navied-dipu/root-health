import { serverFetch } from "../core/server";

export const getDoctorsData = async () => {
  return await serverFetch<any[]>("/api/doctors");
};