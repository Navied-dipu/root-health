/**
 * Centralized demo data for the RootHealth application.
 * All mock/demo data used across the app is defined here
 * so it can be imported wherever needed.
 */

/* ------------------------------------------------------------------ */
/*  Demo Users (for role-based demo switching)                         */
/* ------------------------------------------------------------------ */

export const DEMO_USERS = {
  owner: {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@roothealth.com",
    role: "owner" as const,
    avatar: "SC",
  },
  receptionist: {
    name: "Mike Johnson",
    email: "mike.j@roothealth.com",
    role: "receptionist" as const,
    avatar: "MJ",
  },
  doctor: {
    name: "Dr. Emily Rodriguez",
    email: "emily.r@roothealth.com",
    role: "doctor" as const,
    avatar: "ER",
  },
} as const;

export type RoleKey = keyof typeof DEMO_USERS;

/* ------------------------------------------------------------------ */
/*  Doctors                                                            */
/* ------------------------------------------------------------------ */

/** Full doctor list (used by Owner > Doctors page) */
export const DOCTORS = [
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Cardiology",
    patients: 142,
    status: "Active",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Neurology",
    patients: 98,
    status: "Active",
  },
  {
    name: "Dr. Lisa Anderson",
    specialty: "Pediatrics",
    patients: 215,
    status: "Active",
  },
  {
    name: "Dr. Robert Kim",
    specialty: "Orthopedics",
    patients: 87,
    status: "On Leave",
  },
];

/** Doctors with availability flag (used by Receptionist > Assign Doctor page) */
export const DOCTORS_WITH_AVAILABILITY = [
  { name: "Dr. Emily Rodriguez", specialty: "Cardiology", available: true },
  { name: "Dr. James Wilson", specialty: "Neurology", available: true },
  { name: "Dr. Lisa Anderson", specialty: "Pediatrics", available: false },
  { name: "Dr. Robert Kim", specialty: "Orthopedics", available: true },
];

/* ------------------------------------------------------------------ */
/*  Patients                                                           */
/* ------------------------------------------------------------------ */

/** All patients (used by Owner > Patients page) */
export const PATIENTS = [
  {
    name: "John Smith",
    age: 45,
    doctor: "Dr. Rodriguez",
    lastVisit: "2024-01-15",
  },
  {
    name: "Mary Johnson",
    age: 32,
    doctor: "Dr. Anderson",
    lastVisit: "2024-01-10",
  },
  {
    name: "David Brown",
    age: 58,
    doctor: "Dr. Wilson",
    lastVisit: "2024-01-08",
  },
  {
    name: "Sarah Davis",
    age: 27,
    doctor: "Dr. Rodriguez",
    lastVisit: "2024-01-12",
  },
];

/** Doctor's own patients (used by Doctor > My Patients page) */
export const DOCTOR_PATIENTS = [
  {
    name: "John Smith",
    age: 45,
    condition: "Hypertension",
    lastVisit: "2024-01-15",
  },
  {
    name: "Sarah Davis",
    age: 27,
    condition: "Arrhythmia",
    lastVisit: "2024-01-12",
  },
  {
    name: "Robert Lee",
    age: 63,
    condition: "Post-Surgery",
    lastVisit: "2024-01-05",
  },
];

/* ------------------------------------------------------------------ */
/*  Tests                                                              */
/* ------------------------------------------------------------------ */

/** Available medical tests (used by Owner > Tests page) */
export const MEDICAL_TESTS = [
  {
    name: "Complete Blood Count",
    category: "Hematology",
    price: 45,
    status: "Available",
  },
  {
    name: "Lipid Panel",
    category: "Cardiology",
    price: 65,
    status: "Available",
  },
  {
    name: "Thyroid Function",
    category: "Endocrinology",
    price: 85,
    status: "Available",
  },
  {
    name: "Liver Function",
    category: "Hepatology",
    price: 75,
    status: "Maintenance",
  },
];

/** Patient tests with status (used by Receptionist > Tests page) */
export const PATIENT_TESTS = [
  {
    patient: "John Smith",
    test: "Blood Count",
    doctor: "Dr. Rodriguez",
    status: "Pending",
  },
  {
    patient: "Mary Johnson",
    test: "X-Ray",
    doctor: "Dr. Kim",
    status: "In Progress",
  },
  {
    patient: "David Brown",
    test: "MRI",
    doctor: "Dr. Wilson",
    status: "Completed",
  },
];

/* ------------------------------------------------------------------ */
/*  Dashboard Stats                                                    */
/* ------------------------------------------------------------------ */

/** Owner dashboard stat cards */
export const OWNER_STATS = [
  { label: "Total Revenue", value: "$48,250", change: "+12% from last month", trend: "up" as const },
  { label: "Total Patients", value: "1,284", change: "+8% from last month", trend: "up" as const },
  { label: "Active Doctors", value: "24", change: "2 on leave", trend: "neutral" as const },
  { label: "Tests Completed", value: "3,672", change: "+15% from last month", trend: "up" as const },
];

/** Receptionist dashboard stat cards */
export const RECEPTIONIST_STATS = [
  { label: "Today's Appointments", value: "28" },
  { label: "New Patients Today", value: "5" },
  { label: "Pending Assignments", value: "3" },
  { label: "Tests Scheduled", value: "12" },
];

/** Doctor dashboard stat cards */
export const DOCTOR_STATS = [
  { label: "My Patients", value: "142" },
  { label: "Today's Appointments", value: "8" },
  { label: "Pending Tests", value: "5" },
];

/* ------------------------------------------------------------------ */
/*  Revenue                                                            */
/* ------------------------------------------------------------------ */

export const REVENUE_STATS = [
  { label: "Monthly Revenue", value: "$48,250" },
  { label: "Yearly Revenue", value: "$542,800" },
  { label: "Pending Payments", value: "$12,400" },
];