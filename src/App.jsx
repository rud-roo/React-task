import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([
    {id:1, name: "Rudro", isPresent: true},
    {id:2, name: "Maruf", isPresent: false},
    {id:3, name: "Niloy", isPresent: undefined},
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const presentList = students.filter(
    (student) => student.isPresent===true
  );
  const absentList = students.filter(
    (student) => student.isPresent===false
  );

  const submitHandler = (event) => {
    event.preventDefault();
    if(studentName.trim()===""){
      return alert("Please enter a valid name.");
    }
    editMode ? updateHandler() : createHandler();
  }

  const createHandler = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    }
    setStudents([...students, newStudent])
    setStudentName("");
  }

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
  }

  const updateHandler = () => {
    const updatedStudentList = students.map((student) => {
      if(student.id===editableStudent.id){
        return {...student, name: studentName};
      }
      return student;
    })

    setStudents(updatedStudentList);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  }

  const removeHandler = (studentId) => {
    const updatedStudentList = students.filter(
      (student) => student.id !== studentId
    )
    setStudents(updatedStudentList);
  }

  const sendToPresentList = (student) => {
    if(student.isPresent!==undefined){
      return alert(
        `The student is already in the ${
          student.isPresent ? "Present list" : "Absent list"
        }`
      )
    }

    const updatedStudentList = students.map((item) => {
      if(item.id === student.id){
        return {...item, isPresent: true};
      }
      return item;
    })

    setStudents(updatedStudentList);
  }

  const sendToAbsentList = (student) => {
    if(student.isPresent!==undefined){
      return alert(
        `The student is already in the ${
          student.isPresent ? "Present list" : "Absent list"
        }`
      )
    }

    const updatedStudentList = students.map((item) => {
      if(item.id === student.id){
        return {...item, isPresent: false};
      }
      return item;
    })

    setStudents(updatedStudentList);
  }

  const toggleList = (studentId) => {
    const updatedStudentList = students.map((student) => {
      if(student.id === studentId){
        return {...student, isPresent: !student.isPresent};
      }
      return student;
    })

    setStudents(updatedStudentList);
  }

  return (
    <div className="App">
      <form  className="form" onSubmit={submitHandler}>
        <input 
          type="text" 
          value={studentName} 
          onChange={(e)=>setStudentName(e.target.value)}
        />
        <button type="submit">
          {editMode ? "Update student" : "Add student"}
        </button>
      </form>

      <div className="student-section">

        <div className="all-list">
          <h2>All Students</h2>
          <ul>
            {students.map((student)=>(
              <li className="list-item">
                <span>{student.name}</span>
                <button onClick={()=>editHandler(student)}>Edit</button>
                <button onClick={()=>removeHandler(student.id)}>Remove</button>
                <button onClick={()=>sendToPresentList(student)}>Send to Present List</button>
                <button onClick={()=>sendToAbsentList(student)}>Send to Absent List</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="present-list">
          <h2>Present Students</h2>
          <ul>
            {presentList.map((student) => (
              <li className="list-item">
                <span>{student.name}</span>
                <button onClick={()=>toggleList(student.id)}>Accidentaly Added</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="absent-list">
          <h2>Absent Students</h2>
          <ul>
            {absentList.map((student) => (
              <li className="list-item">
                <span>{student.name}</span>
                <button onClick={()=>toggleList(student.id)}>Accidentaly Added</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
