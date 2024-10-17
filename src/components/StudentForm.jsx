import React from 'react'

const StudentForm = (props) => {
  const {
    studentName,
    setStudentName,
    editMode,
    setEditMode,
    students,
    setStudents,
    editableStudent,
    setEditableStudent,
  } = props;

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