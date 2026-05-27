# SheCan Connect — MERN Stack NGO Website

**Live Demo : https://she-can-connect.vercel.app/**

A modern, responsive NGO website for **SheCan Connect** built with the MERN stack.

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Install Frontend Dependencies
```bash
cd client
npm install
```

### 3. Configure Environment
Edit `server/.env` and add your MongoDB Atlas URI:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/shecan-connect
```

### 4. Run Backend (Terminal 1)
```bash
cd server
npm run dev
```
Backend runs at → http://localhost:5000

### 5. Run Frontend (Terminal 2)
```bash
cd client
npm run dev
```
Frontend runs at → http://localhost:5173

## 📁 Project Structure

```
SheCan Connect/
├── client/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Volunteer.jsx
│   │   │   └── Contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── server/                  # Node.js + Express backend
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── contactController.js
    ├── models/
    │   └── Contact.js
    ├── routes/
    │   └── contactRoutes.js
    ├── server.js
    ├── .env
    └── package.json
```

## 🛠 Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, React Router v6
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB Atlas
- **API calls**: Axios
- **Notifications**: React Hot Toast

## 🔌 API Endpoints
| Method | Endpoint       | Description         |
|--------|----------------|---------------------|
| GET    | /api/test      | Health check        |
| POST   | /api/contact   | Submit contact form |
| GET    | /api/contact   | Get all messages    |
