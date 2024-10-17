import React from 'react'

const AllStudentList = (props) => {

  const {
    students,
    setStudents,
    setStudentName,
    setEditMode,
    setEditableStudent,
  } = props;

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


  return (
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
  )
}

export default AllStudentList