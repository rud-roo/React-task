import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './components/StudentForm';
import StudentSection from './components/StudentSection';



function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([
    {id:1, name: "Rudro", isPresent: true},
    {id:2, name: "Maruf", isPresent: false},
    {id:3, name: "Niloy", isPresent: undefined},
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);


  return (
    <div className="App">
      <StudentForm
        studentName = {studentName}
        setStudentName = {setStudentName}
        editMode = {editMode}
        setEditMode = {setEditMode}
        students = {students}
        setStudents = {setStudents}
        editableStudent = {editableStudent}
        setEditableStudent = {setEditableStudent}
      />

      <StudentSection
        students = {students}
        setStudents = {setStudents}
        setStudentName = {setStudentName}
        setEditMode = {setEditMode}
        setEditableStudent = {setEditableStudent}
      />
    </div>
  )
}

export default App
