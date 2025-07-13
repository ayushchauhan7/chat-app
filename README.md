````markdown
# 💬 Realtime Chat App

A full-stack realtime chat application built with **React** (frontend), **Express** / **Node** (backend), **Socket.IO** for realtime communication, **MongoDB** for database, and **Cloudinary** for image uploads. Styled using **Tailwind CSS** and deployed via **Vercel** (frontend) and **Vercel** (backend).

> 🔗 Live Demo: [https://chat-app-five-ebon.vercel.app/login](https://chat-app-five-ebon.vercel.app/login)  
> 📂 Repository: [https://github.com/ayushchauhan7/chat-app](https://github.com/ayushchauhan7/chat-app)

---

## 🚀 Features

- 💬 Real-time 1-on-1 messaging with **Socket.IO**
- 🔐 Secure user authentication (login & signup with JWT)
- 📝 Persistent chat using **MongoDB**
- 📷 Image upload & sharing via **Cloudinary**
- 💻 Responsive UI built with **Tailwind CSS**
- 🟢 Online status indicators

---

## 🛠️ Tech Stack

### 🧩 Frontend
- React.js
- Tailwind CSS
- Axios
- Socket.IO Client

### 🧠 Backend
- Node.js + Express.js
- MongoDB + Mongoose
- Cloudinary SDK
- Socket.IO
- JSON Web Token (JWT)
- dotenv

---

## 📂 Project Structure

```bash
chat-app/
│
├── client/                 # React + Tailwind frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   └── App.js
│   └── tailwind.config.js
│   |--dotenv
├── server/                 # Express + MongoDB backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│   |--dotenv 
├── package.json
└── README.md
````

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ayushchauhan7/chat-app.git
cd chat-app
```

### 2. Install Dependencies

**Frontend:**

```bash
cd client
npm install
```

**Backend:**

```bash
cd ../server
npm install
```

---

## 🔑 Environment Variables

In `client/.env`, add:

```env
VITE_BACKEND_URL='http://localhost:5000'
```

In `server/.env`, add:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## 🧪 Run Locally

### Backend

```bash
cd server
npm run server
```

### Frontend

```bash
cd ../client
npm run dev
```

---

## 🚀 Deployment

### Frontend: **Vercel**

* Connect `client/` to Vercel.
* Set environment variable: `VITE_BACKEND_URL=https://chat-app-backend-brown-seven.vercel.app`.

### Backend: **Vercel**

* Deploy `server/` folder.
* Add `.env` variables in your dashboard.

---

## 📷 Screenshots

<img width="1920" height="1080" alt="Screenshot (549)" src="https://github.com/user-attachments/assets/d51f464b-18b0-4e50-af52-d8206611e266" />
<img width="1920" height="1080" alt="Screenshot (548)" src="https://github.com/user-attachments/assets/53e8f182-f199-4a19-84cc-e6f338ce6598" />

---

## 👨‍💻 Author

**Ayush Chauhan**
[GitHub](https://github.com/ayushchauhan7) | [LinkedIn](https://www.linkedin.com/in/ayushchauhan7)

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐ Support & Contributions

If you find this project helpful:

* ⭐ Star the repo
* 🛠️ Fork and contribute
* 🗣️ Share your feedback via issues

```

---

```
