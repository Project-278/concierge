import { companies } from "@/data/companies";
export const interests = [
  { value: "general", label: "General enquiry" },
  { value: "partnership", label: "Partnership opportunity" },
  ...companies.map((c) => ({ value: c.slug, label: c.name })),
  { value: "careers", label: "Careers enquiry" },
];
export type Enquiry = {
  name: string;
  email: string;
  organisation: string;
  interest: string;
  message: string;
  consent: boolean;
};
export function validateEnquiry(
  value: unknown,
): { data: Enquiry; error?: never } | { error: string; data?: never } {
  if (!value || typeof value !== "object")
    return { error: "Please complete the enquiry form." };
  const input = value as Record<string, unknown>;
  const fields = [
    "name",
    "email",
    "organisation",
    "interest",
    "message",
  ] as const;
  if (fields.some((key) => typeof input[key] !== "string"))
    return { error: "Please check the enquiry details." };
  const data = Object.fromEntries(
    fields.map((key) => [key, (input[key] as string).trim()]),
  ) as Omit<Enquiry, "consent">;
  if (data.name.length < 2 || data.name.length > 120)
    return { error: "Please enter a name between 2 and 120 characters." };
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return { error: "Please enter a valid email address." };
  if (data.organisation.length > 160)
    return { error: "Please keep the organisation name under 160 characters." };
  if (!interests.some((i) => i.value === data.interest))
    return { error: "Please select an area of interest." };
  if (data.message.length < 20 || data.message.length > 5000)
    return { error: "Please describe your enquiry in 20 to 5,000 characters." };
  if (input.consent !== true)
    return { error: "Please acknowledge the privacy information to continue.," };
  return { data: { ...data, consent: true } };
}
export function enquiryDraft(data: Enquiry) {
  return `CONCIERGE GROUP — ENQUIRY DRAFT\nNot submitted\n\nName: ${data.name}\nEmail: ${data.email}\nOrganisation: ${data.organisation || "Not specified"}\nArea of interest: ${interests.find((i) => i.value === data.interest)?.label}\n\n${data.message}\n`;
}
