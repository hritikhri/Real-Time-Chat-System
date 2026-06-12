# 💬 Real-Time Chat System

<p align="center">

<img src="https://img.shields.io/badge/Project-Real%20Time%20Chat-blue?style=for-the-badge" />

<img src="https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge" />

<img src="https://img.shields.io/badge/Communication-Socket.IO-black?style=for-the-badge" />

</p>


## 🚀 Overview

**Real-Time Chat System** is a full-stack MERN based messaging application that enables users to communicate instantly with secure authentication and real-time updates.

The application allows users to register, login, manage profiles, upload profile pictures, search users, and exchange messages using real-time socket communication.


---

## ✨ Features


### 🔐 Authentication
- Secure user registration and login
- JWT based authentication
- Password encryption using Bcrypt
- Protected API routes
- Secure logout system


### 👤 User Profile
- Create and update profile
- Edit personal information
- Upload profile picture
- Cloud based image management
- User account management


### 💬 Real-Time Messaging
- Instant one-to-one messaging
- Real-time communication using Socket.IO
- Live message updates
- Persistent chat history
- No page refresh required


### 🔎 User Discovery
- Search users
- View profiles
- Start conversations


### ⚡ Additional Features

- REST API architecture
- Responsive interface
- Secure backend structure
- Modular code organization


---

# 🛠️ Tech Stack


## Frontend

```
React.js
Vite.js
React Router
Axios
Socket.IO Client
```


## Backend

```
Node.js
Express.js
Socket.IO
JWT
Bcrypt
Multer
Nodemailer
```


## Database & Storage

```
MongoDB
Mongoose
Cloudinary
```


---

# 🏗️ Architecture


```
                 Client

                  |
                  |

              React UI

                  |
                  |

              Axios API

                  |
                  |

          Express Server

                  |
        -------------------

        |                 |

   REST APIs        Socket.IO

        |                 |

        -------------------

                  |

              MongoDB

```


---

# 📂 Project Structure


```
Real-Time-Chat-System

│
├── backend
│
│── db
│   └── Database.js
│
│── middleware
│   └── Token.js
│
│── routes
│   ├── AuthRoutes.js
│   ├── ProfileRoutes.js
│   ├── MessageRoutes.js
│   └── UpdateRoutes.js
│
│── sockets
│   └── ChatingSocket.js
│
└── server.js


├── frontend

│── src
│
├── components
├── pages
├── services
└── App.jsx

```


---

# 🔄 Application Workflow


```
User Signup/Login

        ↓

JWT Verification

        ↓

Profile Access

        ↓

Search Users

        ↓

Create Chat

        ↓

Socket Connection

        ↓

Real-Time Messaging

```


---

# 🔌 API Routes


## Authentication

```http
POST /auth/signup

POST /auth/login
```


## Profile

```http
GET  /profile

PUT  /update/profile
```


## Messages

```http
GET  /messages

POST /messages/send
```


---

# ⚙️ Installation


## Clone Repository

```bash
git clone https://github.com/hritikhri/Real-Time-Chat-System.git

cd Real-Time-Chat-System
```


## Backend Setup

```bash
cd backend

npm install
```


Create `.env`

```env
Port=5000

MONGO_URI=your_mongodb_url

JWT_SECRET=your_secret

CLOUDINARY_NAME=your_name

CLOUDINARY_API_KEY=your_key

CLOUDINARY_SECRET=your_secret
```


Run server:

```bash
npm start
```


---

## Frontend Setup


```bash
cd frontend

npm install

npm run dev
```


---

# 📸 Screenshots


## Login

<img src="./screenshots/login.png" width="700"/>


## Signup

<img src="./screenshots/signup.png" width="700"/>


## Chat Interface

<img src="./screenshots/chat.png" width="700"/>


## Profile Management

<img src="./screenshots/profile.png" width="700"/>


---

# 🔒 Security Implementation


✔ JWT Authentication  
✔ Password Hashing  
✔ Protected Routes  
✔ Secure API Access  
✔ CORS Protection  
✔ User Authorization  


---

# 🚀 Future Enhancements


- Group Chat
- Online / Offline Status
- Typing Indicator
- Message Seen Status
- Voice Calling
- Video Calling
- Push Notifications
- End-to-End Encryption


---

# 👨‍💻 Developer


**Hritik Kumar**

MERN Stack Developer


GitHub:
https://github.com/hritikhri


---

# ⭐ Support

If this project helped you, consider giving it a star ⭐
