# Task Management System

A full-stack MERN application for team task management with real-time updates.

## Features
- User authentication (register/login)
- Create, read, update, delete tasks
- Assign tasks to team members
- Real-time updates with Socket.io
- Responsive UI with React

## Installation

### Backend
1. Navigate to backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create `.env` file with your MongoDB URI and JWT secret
4. Run server: `npm run dev`

### Frontend
1. Navigate to frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Create `.env` file with your backend API URL
4. Run development server: `npm start`

## Testing
- Backend: `cd backend && npm test`
- Frontend: `cd frontend && npm test`
- E2E: `cd frontend && npm run cypress:open`

## Deployment
The application can be deployed to:
- Backend: Heroku, Render, or AWS
- Frontend: Vercel, Netlify, or Firebase