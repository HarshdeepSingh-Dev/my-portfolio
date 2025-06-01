import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, name, message } = await req.json();

  console.log(process.env.user, process.env.pass);

  // create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  const mailOptions = {
    from: process.env.user,
    to: "hs703808@gmail.com",
    subject: `New message from ${name} through Your portfolio contact`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("email error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }

  // console.log("in backend", email, name, message)
}
