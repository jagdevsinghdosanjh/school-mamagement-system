# 📚 School Exam and Progress Report Management System

### 🎯 **Project Overview**
This system manages **students, exams, results, and progress reports**, optimized for deployment on **Vercel**. Built using:
- **Frontend:** Next.js (React)
- **Backend:** Node.js with Express
- **Authentication:** NextAuth.js (Google Sign-In)
- **Database:** PostgreSQL with Prisma

### 🚀 **Features**
✅ **Admin Panel** - Manage students, exams, and reports  
✅ **Teacher Module** - Input student marks  
✅ **Student Portal** - View grades and progress reports  
✅ **Authentication** - Secure login via Google OAuth  
✅ **Deployment-Ready** - Optimized for Vercel  

---

## 📂 **Directory Structure**
school-management-system/ ├── frontend/ # Next.js Frontend │ ├── pages/ # Next.js Pages (Routing) │ │ ├── index.js # Dashboard Page │ │ ├── login.js # Authentication Page │ │ ├── students.js # Student List Page │ ├── components/ # UI Components │ │ ├── StudentsList.js # Fetch & Display Students │ │ ├── ExamsList.js # Fetch & Display Exams │ │ ├── StudentReport.js # Fetch & Display Reports │ ├── services/ # API Calls to Backend │ │ ├── api.js # Handles API Fetch Functions │ ├── styles/ # Tailwind or CSS Styles │ ├── next.config.js # Next.js Configuration │ ├── package.json # Dependencies & Scripts │ ├── .env # Environment Variables │ ├── .next/ # Production Build (Generated after npm run build) │ ├── node_modules/ # Installed Dependencies │ ├── backend/ # Node.js API │ ├── src/ # Core Backend Logic │ │ ├── routes/ # Express.js API Routes │ │ │ ├── auth.js # Authentication (JWT) │ │ │ ├── students.js # Student Management │ │ │ ├── exams.js # Exams & Results │ │ │ ├── reports.js # Progress Reports │ │ ├── controllers/ # Business Logic for Routes │ │ ├── middleware/ # Authentication & Validation │ │ ├── models/ # Prisma Database Schema │ ├── prisma/ │ │ ├── schema.prisma # PostgreSQL Schema │ ├── server.js # Express Server Setup │ ├── package.json # Dependencies & Scripts │ ├── .env # Environment Variables │ ├── node_modules/ # Installed Dependencies │ └── README.md # Project Documentation

---

## 🛠 **Setup & Installation**
### **1️⃣ Clone Repository**
```bash
git clone https://github.com/jagdevsinghdosanjh/school-management-system.git
cd school-management-system

BACKEND SETUP - 
cd backend
npm install
npx prisma migrate dev --name init
npx prisma generate
nodemon server.js

FRONTEND SETUP
cd ../frontend
npm install
npm run dev

Access the app at http://localhost:3000

Deployment Guide
Backend (Node.js + Vercel)
vercel deploy

Frontend (Next.js + Vercel)
npm run build
vercel deploy

Contributing
💡 Pull requests are welcome! Feel free to improve the code and submit your changes.

License
This project is MIT Licensed – feel free to use and modify it as needed.
