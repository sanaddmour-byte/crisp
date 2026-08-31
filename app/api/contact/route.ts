import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // TODO: connect to email/CRM provider (e.g. Resend, SendGrid, HubSpot, Salesforce).
  // For now this route only validates the payload and logs it server-side —
  // no email is sent and no CRM record is created. Wire in a real provider
  // before launch; see README.md for notes.
  console.log("[contact] inquiry received:", {
    ...body,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
