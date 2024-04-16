import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, name, message, phone, subject } = await request.json();
    
    const transport = nodemailer.createTransport({
        host: "smtp.titan.email",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: `"${name}" <${process.env.MY_EMAIL}>`, // Use the authenticated email address
        /* replyTo: email, */ // Original sender's email address for replies
        to: process.env.MY_EMAIL, // Your receiving email address
        cc: email, // Send a copy to the sender
        subject: `New Contact from ${name}: ${subject}`,
        text: [
            `You have received a new message from the contact form on your website.`,
            `Here are the details:`,
            `Name: ${name}`,
            `Email: ${email}`,
            `Phone: ${phone}`,
            `Subject: ${subject}`,
            `Message: `,
            message,
        ].join('\n\n'), // Format the message body
    };


    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
