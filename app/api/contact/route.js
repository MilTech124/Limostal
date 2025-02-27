import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Imię, email i wiadomość są wymagane' },
        { status: 400 }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'limostal.garaze@gmail.com', // Replace with your email
      subject: `Nowa wiadomość od ${name}`,
      replyTo: email,
      text: `
        Imię i nazwisko: ${name}
        Email: ${email}
        Telefon: ${phone || 'Nie podano'}
        
        Wiadomość:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Nowa wiadomość ze strony Limostal</h2>
          <p><strong>Od:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #0ea5e9;">
            <h3 style="margin-top: 0;">Wiadomość:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #64748b;">
            Ta wiadomość została wysłana z formularza kontaktowego na stronie Limostal.
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas wysyłania wiadomości' },
      { status: 500 }
    );
  }
}
