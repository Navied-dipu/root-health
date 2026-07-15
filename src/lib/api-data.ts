// API data fetchers for owner dashboard

export interface OwnerStat {
  label: string;
  value: string;
  change?: string;
  trend?: "up" | "down" | "neutral";
}

export const getOwnerStats = async (): Promise<OwnerStat[]> => {
  // In production, this would fetch from your API.
  // Using static fallback data so the build always succeeds.
  return [
    { label: "Total Patients", value: "142", change: "+8 this week", trend: "up" },
    { label: "Doctors On Duty", value: "6", change: "Same as last week", trend: "neutral" },
    { label: "Today's Appointments", value: "34", change: "+5 vs yesterday", trend: "up" },
    { label: "Revenue (Month)", value: "$12,400", change: "+12% vs last month", trend: "up" },
  ];
};
