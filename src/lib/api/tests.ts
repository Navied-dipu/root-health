import { serverFetch } from "../core/server";


export const getTestsData = async () => {
  return await serverFetch<any[]>("/api/tests");
};