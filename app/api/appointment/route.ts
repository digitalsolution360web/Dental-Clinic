import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, phone, treatment, date } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "andheridentalclinic999@gmail.com,digitalsolution3600@gmail.com",
      subject: "Lp Andheri Dental Request",
      html: `
        <h2>New Lp Andheri Dental Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Treatment:</strong> ${treatment}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment request sent successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send appointment request",
      },
      { status: 500 }
    );
  }
}