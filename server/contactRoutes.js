const express = require("express");
const router = express.Router();
const Contact = require("./contactModel");
const nodemailer = require("nodemailer");

// to transport the nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post("/", async (req, res) => {
  try {
    const { name, email, message, number } = req.body;
    const contact = new Contact(name, email, message, number); // for creating new contact object immediatly

    //validate input
    const validation = contact.validate();
    if (!validation.valid) {
      return res.status(400).json({ error: validation.error });
    }
    console.log("Revieved contact Form Data:", contact);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: "New contact Form Submission",
      text: `Name ${contact.name}\nEmail:${contact.email}\nMessage:${contact.message}\nNumber:${contact.number}`,
    };

    await transporter.sendMail(mailOptions); // to send mail
    res.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
