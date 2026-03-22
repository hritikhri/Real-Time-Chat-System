const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;

// 34RLE5Qj6Tc4Anot                  hkroy098_db_user