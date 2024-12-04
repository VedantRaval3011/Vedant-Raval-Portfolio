import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const generateEmailTemplate = (email:string, message:string) => {
    return `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
          <div style="text-align: center;">
            <h1 style="color: #0DAC9A" >THE AUTOBOT</h1>
          </div>
          <p style="font-size: 16px;">
            You have received a new message from the portfolio. Below are the details:
          </p>
          <div style="border: 1px solid #e0e0e0; padding: 10px; margin-top: 20px;">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="padding: 10px; background-color: #f0f0f0; border-radius: 5px;">
              ${message}
            </p>
          </div>
          <footer style="font-size: 12px; color: #aaa; text-align: center; padding-top: 10px; border-top: 1px solid #e0e0e0; margin-top: 20px;">
            © 2024 AUTOBOT. All rights reserved.
          </footer>
        </div>
      `;
  };

export async function POST(req: Request){
    const {email, message} = await req.json();
    const EMAIL = process.env.EMAIL_ADMIN;
    const PASSCODE = process.env.EMAIL_ADMIN_PASS;

    if(!email || !message){
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: EMAIL,
              pass: PASSCODE,
            },
        })

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_ADMIN,
            subject: "New Message from the portfolio",
            html: generateEmailTemplate( email,  message),
        })

        return NextResponse.json({ message: "Mail Sent, Please check your inbox" }, { status: 200 });
        
    } catch (error) {
        return NextResponse.json(
            { error: `Internal Server Error: ${error}` },
            { status: 500 }
        );
    }
}