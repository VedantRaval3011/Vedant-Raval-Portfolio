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
  export async function POST(req: Request) {
    const { email, message } = await req.json();
    const EMAIL = process.env.EMAIL_ADMIN;
    const PASSCODE = process.env.EMAIL_ADMIN_PASS;

    // Detailed environment variable check
    if (!EMAIL || !PASSCODE) {
        console.error('Missing email configuration');
        return NextResponse.json(
            { message: "Email configuration is incomplete" },
            { status: 500 }
        );
    }

    if (!email || !message) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use TLS
            auth: {
                user: EMAIL,
                pass: PASSCODE,
            },
            // Add this to resolve potential connection issues
            tls: {
                rejectUnauthorized: false
            }
        });

        // Validate transporter connection
        await new Promise((resolve, reject) => {
            transporter.verify((error, success) => {
                if (error) {
                    console.error('SMTP Connection Error:', error);
                    reject(error);
                } else {
                    resolve(success);
                }
            });
        });

        await transporter.sendMail({
            from: EMAIL, // Use your admin email as the sender
            to: EMAIL,   // Send to the same admin email
            replyTo: email, // Set the reply-to as the sender's email
            subject: "New Message from the portfolio",
            html: generateEmailTemplate(email, message),
        });

        return NextResponse.json({ message: "Mail Sent, Please check your inbox" }, { status: 200 });
        
    } catch (error) {
        console.error('Full Error Details:', error);
        return NextResponse.json(
            { error: `Internal Server Error: ${error instanceof Error ? error.message : 'Unknown error'}` },
            { status: 500 }
        );
    }
}