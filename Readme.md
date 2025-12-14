# Instagram Mini Clone

## Overview
This project is a simplified Instagram clone to demonstrate full-stack web development skills. It  allows users to sign up, login, create posts, like and comment on posts, and follow other users.

The application follows a clean client-server architecture using the MERN Stack.

---

## Live Backend
**Base URL:** https://backend-instagram-87hc.onrender.com

>Note: some routes require authentication via JWT.

---

## Features
- User authentication(Signup, Login, Logout)
- Create, edit, and delete posts
- Like and Comment on posts
- Follow/unfollow users
-Backend APIs with Express.js and Storing user information in MongoDB
- **JWT (JSON Web Tokes)** for secure authentication/authorization
-Postman collection included for API testing

## Tech Stack
- **Frontend:** React.js, HTML, CSS, TailwindCSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT(JSON Web Token)
- **Tools:** Postman

---

###Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB running locally or via MongoDB Atlas

---

### Environment Variables
Create a `.env` file inside the `Backend` folder and add the following: 

```env
PORT=8080
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

replace the values with your actual credentials.

### Steps to Run the project

1. Clone the repository:  

git clone https://github.com/gauravbisen1/TRUEiGTECH---Instagram-Mini-Clone

2. Install backenddependencies and start server:

cd Backend
npm install
npm start

3. Install frontend dependencies and start React app:

cd ../Frontend
npm install 
npm run dev

4. Open your browser and go to:

frontend: http://localhost:5173
backend: http://localhost:8080


### Author
Gaurav Bisen
Built with a focus on clean code, scalability, and real-world backend practices.
