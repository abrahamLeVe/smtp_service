import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const sendEmail = async (req: Request, res: Response) => {
  try {
    const { to, subject, text } = req.body;
    console.log(req.body);

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      to: to,
      subject: subject,
      text: text,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).send("Correo electrónico enviado correctamente");
  } catch (error) {
    console.error("Error al enviar el correo electrónico:", error);
    res.status(500).send("Error al enviar el correo electrónico");
  }
};
