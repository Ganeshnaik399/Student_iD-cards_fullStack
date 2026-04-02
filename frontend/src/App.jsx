import React, { useEffect, useState } from "react";
import "./App.css";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
import SearchBar from "./components/SearchBar";

function App() {
  const [students, setStudents] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [editData, setEditData] = useState(null);

  const API = "http://127.0.0.1:5000/students";

  const fetchStudents = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setStudents(data);
    setFiltered(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // ➕ Add Student
  const addStudent = async (student) => {
    await fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(student),
    });
    fetchStudents();
  };

  // ❌ Delete
  const deleteStudent = async (rollno) => {
    await fetch(`${API}/${rollno}`, { method: "DELETE" });
    fetchStudents();
  };

  // ✏️ Update
  const updateStudent = async (student) => {
    await fetch(`${API}/${student.rollno}`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(student),
    });
    setEditData(null);
    fetchStudents();
  };

  // 🔍 Search
  const Search = (roll) => {
    if (!roll) return setFiltered(students);
    setFiltered(students.filter(s => s.rollno.toString() === roll));
  };

  return (
    <div className="container">
      <h1>Student Dashboard</h1>

      <SearchBar onSearch={Search} />

      <StudentForm
        addStudent={addStudent}
        editData={editData}
        updateStudent={updateStudent}
      />
      <div className="cardfull">
      <div className="card-container">
        {filtered.map((s) => (
          <StudentCard
            key={s.rollno}
            student={s}
            onDelete={deleteStudent}
            onEdit={setEditData}
          />
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;