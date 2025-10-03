const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Contact model
const Contact = require("../models/contact");

// POST /api/contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or any email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // app password (for Gmail)
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // send back to the visitor
      subject: "Thanks for contacting me!",
      text: `Hi ${name},\n\nThank you for reaching out. I will get back to you soon.\n\nYour Message: ${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ message: "Message received!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
