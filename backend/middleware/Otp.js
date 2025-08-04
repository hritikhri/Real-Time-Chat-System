const nodemailer = require("nodemailer");

const OtpVerification = async (Email) => {
  const Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  });

  const genrateOTP = () =>
    Math.floor(100000 + Math.random() * 900000).toString();
  const newOtp = genrateOTP();

  const MainConfigration = {
    from: process.env.Email,
    to: Email,
    subject: "Email Verification",

    text: `Hi! There, You have recently visited 
       our website and entered your email.
       Your otp is : ${newOtp}
       Thanks`,
  };
  try {
    await Transporter.sendMail(MainConfigration);
    console.log("mail send sucessfully", newOtp);
    return newOtp;
  } catch (err) {
    console.log(err);
  }
};

module.exports = OtpVerification;
