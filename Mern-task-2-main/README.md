# MERN Task 2 - Authentication App

A **full-stack authentication app** built with the MERN stack. Users can **signup**, **login**, and access a **protected home page** using JWT authentication.

---

## **Features**

* User Signup with **hashed password**
* User Login with **JWT token**
* Protected Home Page accessible only with a valid token
* Logout functionality
* Clean, responsive **React frontend**

---

## **Technologies Used**

### Backend

* Node.js, Express.js
* MongoDB, Mongoose
* bcryptjs (password hashing)
* jsonwebtoken (JWT authentication)
* dotenv (environment variables)

### Frontend

* React, React Router
* Axios for API requests
* CSS for styling

---

## **Project Structure**

```
backend/
├── server.js           # Backend entry
├── routes/
│   └── auth.js         # Signup, login, protected routes
├── models/
│   └── User.js         # Mongoose User schema
├── middleware/
│   └── auth.js         # JWT verification
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.js
│   │   │   ├── Signup.js
│   │   │   └── Home.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── axios.js
│   ├── package.json
│   └── public/
├── package.json        # Backend dependencies
└── .env                # Environment variables
```

---

## **Setup Instructions**

### 1. Clone the repository

```bash
git clone https://github.com/trashika112/Mern-task-2.git
cd Mern-task-2/backend
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Create `.env` file

Create a `.env` in the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run Backend Server

```bash
node server.js
```

* Backend runs at: `http://localhost:5000/api`

### 5. Run Frontend

```bash
cd frontend
npm install
npm start
```

* Frontend runs at: `http://localhost:3000`

---

## **Usage**

1. Open `http://localhost:3000` in your browser.
2. Go to **Signup** and create an account.
3. Login with your credentials.
4. Access the **Home** page (protected route).
5. Click **Logout** to clear your token.

---

## **Credits**

This project was **developed by Trashika S Karkera**.

