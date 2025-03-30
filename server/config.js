require("dotenv").config();

exports.EMAIL = {
  PORT: process.env.PORT,
  email_user: process.env.EMAIL_USER,
  email_password: process.env.EMAIL_PASS,
  receiver_mail: process.env.RECEIVER_EMAIL,
};
