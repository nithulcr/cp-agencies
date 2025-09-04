import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, phone, email, message } = await request.json();

  // Setup transporter with your Gmail credentials

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS,
  },
  tls: {
    ciphers: 'SSLv3'
  }
});

const mailOptions = {
  from: process.env.OUTLOOK_USER,
  to: process.env.NOTIFICATION_EMAIL,  // Can remain your gmail or other notification email
  subject: `New Contact Form Submission from ${name}`,
  text: `
    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    Message: ${message}
  `,
};


  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'An unknown error occurred' }), { status: 500 });
  }
}
