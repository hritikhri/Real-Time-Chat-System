const express = require("express");
const app = express();
require("dotenv").config();
const http = require("http");
const cors = require("cors");
const path = require("path");
const ChatingSocket = require('./sockets/ChatingSocket');

const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL, 
];

const corsOptions = {
  origin: (origin, callback) => {
    // allow requests with no origin (e.g. curl, mobile apps)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  // allowedHeaders: ["Content-Type", "Authorization", "token"],
};

// Middlewares
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(cors(corsOptions));

// Chatting server — pass corsOptions so Socket.IO uses the same config
const server = http.createServer(app);
ChatingSocket(server, corsOptions);

const connectDB = require("./db/Database");
const UserAuth = require("./routes/AuthRoutes");
const AuthToken = require("./middleware/Token");
const ProfileRoutes = require("./routes/ProfileRoutes");
const MessageRoutes = require("./routes/MessageRoutes");
const UpdateRoutes = require("./routes/UpdateRoutes");

app.use("/auth", UserAuth);
app.use("/", AuthToken, ProfileRoutes);
app.use("/", AuthToken, MessageRoutes);
app.use("/update", AuthToken, UpdateRoutes);

server.listen(process.env.Port, () => {
  connectDB();
  console.log(`Server is listening on port ${process.env.Port}`);
});