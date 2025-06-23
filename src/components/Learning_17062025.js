import { useState } from "react";
import React from 'react';
import './Learning_17062025.css';
function Learning_17062025() {
  const [students, setStudents] = useState(['kaliappan','Abimanyu', 'Santhosh', 'Jagananthan']);
  const [newStudent, setNewStudent] = useState("");
  const handleAddStudent = () => {
    if (newStudent.trim() !=="") {
      setStudents([...students, newStudent]);
      setNewStudent("");
    }
  }
  return (
    <div className="Learning_17062025">
    <h1>17/06/2025 Learning</h1>
    <p> Check paragraph..!!</p>
    <h4>The Students of the class are:</h4>
    <ul>
      {students.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
    <input type = "text"
    placeholder = "Enter student name"
    value = {newStudent}
    onChange = {(e) => setNewStudent(e.target.value)}
    onKeyDown = {(e) => {
      if (e.key === "Enter") {
        handleAddStudent();
      }
    }}
    />
    <button onClick = {handleAddStudent}>Add Student</button>
    </div>
  );
}

export default Learning_17062025;
