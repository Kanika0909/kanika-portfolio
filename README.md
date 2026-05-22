# Kanika Agrawal — MERN Portfolio

A full-stack portfolio website built with MongoDB, Express.js, React.js, and Node.js.

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local) OR a free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster

### 1. Install all dependencies
```bash
npm run install-all
```

### 2. Configure environment
```bash
cd server
cp .env.example .env
```
Edit `server/.env` and set your MongoDB URI:
```
MONGO_URI=mongodb://localhost:27017/portfolio
PORT=5000
```

### 3. Run in development mode (both client + server)
```bash
npm run dev
```

- **Frontend**: http://localhost:3000  
- **Backend API**: http://localhost:5000

---

## 📁 Project Structure

```
kanika-portfolio/
├── client/               # React frontend (Create React App)
│   ├── src/
│   │   ├── components/   # Navbar, Hero, About, Skills, Projects, Experience, Contact
│   │   ├── pages/        # Home page
│   │   └── App.js
│   └── package.json
├── server/               # Express backend
│   ├── models/           # MongoDB Mongoose models
│   ├── routes/           # API routes
│   ├── middleware/        # Rate limiter, validation
│   ├── server.js
│   └── package.json
└── package.json          # Root (runs both with concurrently)
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all messages (dev only) |

---

## 🌐 Deployment

- **Frontend**: Deploy `client/build` to [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
- **Backend**: Deploy `server/` to [Render](https://render.com) or [Railway](https://railway.app)
- **Database**: Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier)
