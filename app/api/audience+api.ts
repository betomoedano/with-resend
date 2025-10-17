import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email) {
    return Response.json({ success: false });
  }

  resend.contacts.create({
    email: email,
    firstName: "Beto",
    lastName: "Moedano",
    unsubscribed: false,
    audienceId: "319b69bc-75e1-4aee-8ca6-e1a85ea23578",
  });

  return Response.json({ success: true });
}
