import { validateEnquiry } from "@/lib/enquiry";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (
    origin &&
    origin !== new URL(request.url).origin &&
    origin !== process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  )
    return Response.json(
      { error: "Please submit your enquiry from this website." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return Response.json(
      { error: "Please use the enquiry form." },
      { status: 415 },
    );
  if (Number(request.headers.get("content-length") || 0) > 20000)
    return Response.json(
      { error: "Your enquiry is too long." },
      { status: 413 },
    );
  let value: unknown;
  try {
    const raw = await request.text();
    if (raw.length > 20000)
      return Response.json(
        { error: "Your enquiry is too long." },
        { status: 413 },
      );
    value = JSON.parse(raw);
  } catch {
    return Response.json(
      { error: "Please check your enquiry and try again." },
      { status: 400 },
    );
  }
  const result = validateEnquiry(value);
  if (result.error)
    return Response.json({ error: result.error }, { status: 400 });
  const endpoint = process.env.ENQUIRY_WEBHOOK_URL;
  if (!endpoint)
    return Response.json(
      {
        error:
          "Online delivery is not yet available. Please prepare a draft using the contact page.",
      },
      { status: 503 },
    );
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...result.data,
        source: "Concierge Group website",
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    if (!response.ok)
      throw new Error("Delivery service did not accept the enquiry");
    return Response.json({ delivered: true });
  } catch {
    return Response.json(
      { error: "We could not confirm delivery. Please try again later." },
      { status: 502 },
    );
  }
}
