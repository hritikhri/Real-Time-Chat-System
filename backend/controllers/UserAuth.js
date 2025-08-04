const User = require("../models/User");
const bcrypt = require("bcrypt");
const OtpVerification = require("../middleware/Otp");
const jwt = require("jsonwebtoken");

// SIGNUP
const Signup = async (req, res) => {
  const { Name, Email, Password } = req.body;

  try {
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, 10);

    // Generate and send OTP
    //const OTP = await OtpVerification(Email); // returns OTP
    // console.log('OTP sent to email:', OTP);

    // Save new user
    const newUser = new User({
      name: Name,
      email: Email,
      password: hashedPassword,
      // otp : OTP
    });
    await newUser.save();

    // Generate JWT token 
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "48h",
    });

    // await User.findByIdAndUpdate(newUser._id, { token });
    //console.log(newUser)

    res.status(201).json({
      message: "User registered successfully. OTP sent to email.",
      email: Email,
      token,
      user: newUser.id,
      // OTP,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// LOGIN
const Login = async (req, res) => {
  
  const { email, password } = req.body;
  try {
    const newUser = await User.findOne({ email });
    if (!newUser) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    
    const isMatch = await bcrypt.compare(password, newUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "48h",
    });

    res.status(200).json({ message: "Login successful", user : newUser._id,token });
  
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { Signup, Login };
