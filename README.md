# TaskFlow - MERN Stack Task Management System

![TaskFlow Screenshot](./screenshots/dashboard.png)

TaskFlow is a full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) that helps teams organize, track, and collaborate on tasks in real-time.

## Key Features

- ✅ User authentication (register/login/logout)
- 🗂️ Create, read, update, and delete tasks
- 👥 Team collaboration with member assignments
- 🔔 Real-time updates using Socket.io
- 📊 Task filtering by status (Todo/In Progress/Done)
- 📱 Fully responsive design
- 🔒 Secure JWT authentication
- 🧪 Comprehensive testing suite

## Live Demo

- **Deployed Application**: [https://taskflow-mern-app.vercel.app](https://taskflow-mern-app.vercel.app)
- **Video Demonstration**: [Watch 8-minute Demo](https://youtu.be/example-demo-video)

## Screenshots

| Login Screen | Dashboard | Task Creation |
|--------------|-----------|---------------|
| ![Login](./screenshots/login.png) | ![Dashboard](./screenshots/dashboard.png) | ![Create Task](./screenshots/create-task.png) |

| Task View | Mobile View | Team Management |
|-----------|-------------|-----------------|
| ![Task](./screenshots/task-view.png) | ![Mobile](./screenshots/mobile-view.png) | ![Team](./screenshots/team-management.png) |

## Technology Stack

**Frontend:**
- React.js
- React Router
- Context API
- Socket.io Client
- Axios
- CSS Modules
- Cypress (E2E testing)

**Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Socket.io
- Jest (Testing)
- Supertest

**DevOps:**
- GitHub Actions (CI/CD)
- Vercel (Frontend Deployment)
- Render (Backend Deployment)
- MongoDB Atlas (Database)

## Installation Guide

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/taskflow-mern.git
   cd taskflow-mern/backend
   ```
2.Install dependencies:
   ```bash
   npm install
  ```
3.Create .env file:
   ```bash
   MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```
4.Start the server:
```bash
npm run dev
```


## Frontend Setup
1.Navigate to frontend directory:
```bash
cd ../frontend
```
2.Install dependencies:
 ```bash
npm install
```
3.Create .env file:
```bash
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```
4.Start the development server:
```bash
npm start
```
## Testing
Backend Tests:
```bash
cd backend
npm test
```
Frontend Unit Tests:
```bash
cd frontend
npm test
```
E2E Tests (Cypress):
```bash
cd frontend
npm run cypress:open
```
## API Documentation
The backend API follows RESTful principles. Full documentation available at:
https://taskflow-api-docs.example.com

Key Endpoints:

- POST /api/auth/register - User registration

- POST /api/auth/login - User login

- GET /api/tasks - Get all tasks

- POST /api/tasks - Create new task

- PUT /api/tasks/:id - Update task

- DELETE /api/tasks/:id - Delete task
