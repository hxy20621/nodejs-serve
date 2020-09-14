import nodemailer from 'nodemailer';

export type sendEmailValue = {
  host: string;
  port: number;
  email: string;
  pass: string;
  toEmail: string;
  subject: string;
  text: string;
  html: string;
}

// async..await is not allowed in global scope, must use a wrapper
export async function sendEmail(options: sendEmailValue) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: options.host,
    port: options.port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: options.email, // generated ethereal user
      pass: options.pass, // generated ethereal password
    },
  });
  let code = Math.floor(Math.random() * 9000) + 1000;
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: options.email, // sender address
    to: options.toEmail, // list of receivers
    subject: options.subject, // Subject line
    text: options.text, // plain text body
    html: options.html,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);