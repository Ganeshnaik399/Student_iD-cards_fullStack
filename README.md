#  Student Management System (Flask + React Vite)

A full-stack **Student Management System** that allows users to perform complete CRUD operations, search students, and view detailed student profiles. Built with a **Flask backend** and a **React (Vite) frontend**, this project demonstrates real-world full-stack development skills.

---

## Features

* **Full CRUD Operations**

  *  Add Student
  * View Students
  * Update Student
  * Delete Student

*  **Search Functionality**

  * Search students by **Roll Number**

*  **Dynamic Card UI**

  * Displays students in responsive cards

*  **Profile Page**

  * Detailed student profile view
  * Includes:

    * Profile Image
    * Skills Section
    * About Section

*  **Routing**

  * Seamless navigation using React Router

---

##  Tech Stack

### Frontend

* React (Vite)
* React Router DOM
* CSS

### Backend

* Flask
* Flask-CORS

---

## 📁 Project Structure

```
student-management/
│
├── backend/
│   ├── app.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StudentCard.jsx
│   │   │   ├── StudentForm.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Profile.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│
└── README.md
```

---

##  Backend Setup (Flask)

```bash
cd backend
pip install flask flask-cors
python app.py
```

Server runs at:

```
http://127.0.0.1:5000
```

---

##  Frontend Setup (React Vite)

```bash
cd frontend
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

##  API Endpoints

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | /students         | Get all students   |
| POST   | /students         | Add new student    |
| GET    | /students/:rollno | Get single student |
| PUT    | /students/:rollno | Update student     |
| DELETE | /students/:rollno | Delete student     |

---

##  Screenshots

###  Dashboard (Card View)

<img width="1856" height="940" alt="Screenshot 2026-04-03 214220" src="https://github.com/user-attachments/assets/c6cd14f4-e048-4087-9da0-24881e18a221" />


###  Add Student

![Add Student](./screenshots/add.png)

###  Update Student

<img width="1838" height="922" alt="image" src="https://github.com/user-attachments/assets/a735e0ad-14e8-42b1-bf7e-6799e73cea79" />


###  Delete Operation

<img width="1835" height="927" alt="Screenshot 2026-04-03 214824" src="https://github.com/user-attachments/assets/7b5bd478-ed96-41ff-82ad-900f94ae177d" />


###  Search by Roll Number

<img width="1874" height="701" alt="Screenshot 2026-04-03 214257" src="https://github.com/user-attachments/assets/98d24819-1f1a-4ef4-9cad-33abb147733a" />


###  Student Profile Page

<img width="1529" height="866" alt="Screenshot 2026-04-03 214332" src="https://github.com/user-attachments/assets/c064c23b-07cf-4160-891e-31c38ff6f4ff" />


---

##  Demo Video



---

##  Key Highlights

* Built a **full-stack CRUD application**
* Implemented **RESTful APIs using Flask**
* Designed a **responsive UI with React**
* Integrated **frontend and backend seamlessly**
* Created a **real-world profile system**

---

##  Future Enhancements

*    Upload real profile images
*    Authentication (JWT Login System)
*   Database integration (MongoDB/MySQL)
*   Deployment (Vercel + Render)

---

##  Contributing

Feel free to fork this repository and contribute!

---

##  Contact

**Ganesh Naik**

*  Frontend Developer | Full Stack Enthusiast
*  ganeshnaiklavoodya2004@gmail.com
*  Add your LinkedIn

---

##  Support

If you like this project, give it a ⭐ on GitHub!

---
