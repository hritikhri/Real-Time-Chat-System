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

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/73e995a2-6cd4-4532-87d8-5267c0b14801" />


## Signup

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3aef22da-0443-48d5-b413-af5e69140b06" />


## Chat Interface

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/81464962-13a9-421c-a085-c326fccfa417" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6fd68671-93c3-47cf-83b4-8cceb6f66654" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/790f6285-1313-4032-98c3-7918e5dd2be3" />

## Searching

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f13ae289-057e-495f-9503-5a96f418e2a7" />


## Profile Management

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c84a9ead-e7bc-4c09-b6cb-e109d3e8d0d0" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bdb273c7-0c2b-46e7-88e6-da2f0d1f59d3" />


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
