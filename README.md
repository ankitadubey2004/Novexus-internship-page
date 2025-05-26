# 🧑‍💻 Novexus Internship Careers Page

This is a full-stack internship application portal for Novexus Technologies, built as part of my Software Developer Intern task. It allows students to browse internship roles and apply through a validated form.

---

## 🚀 Tech Stack

- **Frontend**: HTML, CSS , JS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Hosting**: Netlify (Frontend), Render (Backend)

---

## 🛠️ Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/ankitadubey2004/Novexus-internship-page
cd novexus-internship-page
```

2. Install frontend dependencies:
```bash
cd applynow
npm install
```

3. Install backend dependencies:
```bash
cd ../novexus-backend
npm install
```

4. Create a .env file inside the novexus-backend folder:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```


5. Start the backend:
```bash
cd novexus-backend
npm start
```
 

6. Start the frontend:
```bash
cd ../applynow
npm start
```

---


## 🔗 Live Site
[Live Site](https://novexus-internship.netlify.app/)

---

## 🔐 MongoDB Note
- MongoDB credentials are stored securely in the .env file.
- .env is ignored in version control to keep your database secure.

- Example used in code: mongoose.connect(process.env.MONGO_URI)

--- 

## 📸 Screenshots

### 📝 Apply Now Form  
![Form Screenshot](applynow%20page/assets/images/Screenshot%202025-05-23%20131837.png)

### ✅ Submission Confirmation  
![Confirmation Screenshot](applynow%20page/assets/images/Screenshot%202025-05-23%20131904.png)

--- 

## ✅ Features
- Internship role listings (fetched dynamically)
- Validated "Apply Now" form with:
- Name, Email, Phone
- GitHub/LinkedIn URL
- Resume URL
- Success confirmation message after submission
- MongoDB used for data persistence
- Admin view : Basic table to list applicants 

--- 

## 📂 Deliverables (as per task)
✅ Full source code

✅ Deployed frontend and backend

✅ Functional application form with validation

✅ Database connectivity (MongoDB)

✅ README with screenshots

---

## 🔁 Admin View

## 👩‍💻 Developer
- **Intern** : Ankita Dubey
-  **Start Date** : 19th May 2025
-  **Submission Date** : 26th May 2025
-  **Mentor** : Aryan Parashar





