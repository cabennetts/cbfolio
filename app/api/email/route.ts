import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    console.log(body)
    const { name, subject, email, message } = body

    try {
        const data = await resend.emails.send({
            from: "ContactForm <cbennetts@cbdigitalsolutions.net>",
            to: ["cbennetts@cbdigitalsolutions.net"],
            subject: "cabennetts Contact Form",
            html: `
                <h1>Name: ${name}</h1>
                <h1>Email: ${email}</h1>
                <h3>Subject: ${subject}</h3>
                <p>Message: ${message}</p>
            `,
        });

      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
}

