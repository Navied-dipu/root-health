const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const serverFetch = async <T>(path: string): Promise<T> => {
  const res = await fetch(`${baseUrl}${path}`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Fetch failed for ${path}: ${res.statusText}`);
  }

  return res.json() as Promise<T>;
};
// Restrict mutation methods to standard writing methods
// Ensure baseUrl is defined (replace with your actual import or constant)

type FetchMethod = "POST" | "PUT" | "PATCH" | "DELETE";

export const serverMutation = async (
  path: string,
  data?: unknown,
  method: FetchMethod = "POST",
): Promise<Response> => {
  // 1. Explicitly type the options object as RequestInit
  const options: RequestInit = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      // ...(await authHeader()), // Uncomment if using auth
    },
  };

  // 2. Safely append the body only if data is not undefined or null
  if (data !== undefined && data !== null) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(`${baseUrl}${path}`, options);
  return res;
};
