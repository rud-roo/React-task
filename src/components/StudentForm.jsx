import React, { useContext } from 'react'
import { StudentContext } from './contexts/Student';


const StudentForm = () => {
  const {
    studentName,
    setStudentName,
    editMode,
    submitHandler
  } = useContext(StudentContext);



  return (
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
  )
}

export default StudentForm