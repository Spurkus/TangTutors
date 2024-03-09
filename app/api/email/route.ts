import { NextResponse } from "next/server";
import { Resend } from "resend";
import Email from "@/emails/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    postcode,
    information,
    tutoringType,
  } = await request.json();
  await resend.emails.send({
    from: "Oscar <mail@tangtutors.com>",
    to: [email, "oscartang.dev@gmail.com"],
    subject: "Tang Tutors Student Application",
    react: Email({
      firstName,
      lastName,
      phoneNumber,
      postcode,
      information,
      tutoringType,
    }),
  });

  return NextResponse.json({
    status: "ok",
  });
}
