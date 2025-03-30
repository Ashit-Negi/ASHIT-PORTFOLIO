const express = require("express");
const router = express.Router();
const Contact = require("./contactModel");
const nodemailer = require("nodemailer");
const { EMAIL } = require("./config");

// to transport the nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL.email_user,
    pass: EMAIL.email_password,
  },
});
router.get("/message", async (req, res) => {
  console.log("server is listning");
});
router.post("/", async (req, res) => {
  console.log("Request body:", req.body);
  console.log("Request body:", req);
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
      from: EMAIL.email_user,
      to: EMAIL.receiver_mail,
      subject: "New contact Form Submission",
      text: `Name ${contact.name}\nEmail:${contact.email}\nMessage:${contact.message}\nNumber:${contact.number}`,
    };
    console.log(mailOptions);
    await transporter.sendMail(mailOptions); // to send mail
    res.json({ success: true, message: "Message received successfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "Something went wrong!" });
  }
});

module.exports = router;
