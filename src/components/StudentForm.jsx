import React, { useContext } from 'react'
import { StudentContext } from './contexts/Student';


const StudentForm = () => {
  const {
    studentStates,
    dispatchStudentAction,
    submitHandler,
  } = useContext(StudentContext);



  return (
    <form  className="form" onSubmit={submitHandler}>
      <input 
          type="text" 
          value={studentStates.studentName} 
          onChange={(e)=>dispatchStudentAction({
            type: "CHANGE_STUDENT_NAME",
            payload: e.target.value,
          })}
      />
      <button type="submit">
          {studentStates.editMode ? "Update student" : "Add student"}
      </button>
    </form>
  )
}

export default StudentForm