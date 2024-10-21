import { createContext, useState } from "react";


export const StudentContext = createContext();

const StudentProvider = (props) => {

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([
    {id:1, name: "Rudro", isPresent: true},
    {id:2, name: "Maruf", isPresent: false},
    {id:3, name: "Niloy", isPresent: undefined},
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

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

  const editHandler = (student) => {
    setEditMode(true);
    setStudentName(student.name);
    setEditableStudent(student);
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

  const ctxValue = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    submitHandler,
    createHandler,
    updateHandler,
    editHandler,
    removeHandler,
    sendToPresentList,
    sendToAbsentList,
    toggleList
  }

  return(
    <StudentContext.Provider value={ctxValue}>
      {props.children}
    </StudentContext.Provider>
  )
}

export default StudentProvider;