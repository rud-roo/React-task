import React from 'react'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'
import AbsentStudentList from './AbsentStudentList'

const StudentSection = (props) => {
  const {
    students,
    setStudents,
    setStudentName,
    setEditMode,
    setEditableStudent,
  } = props;

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
    <div className="student-section">
      <AllStudentList
        students = {students}
        setStudents = {setStudents}
        setStudentName = {setStudentName}
        setEditMode = {setEditMode}
        setEditableStudent = {setEditableStudent}
      />

      <PresentStudentList
        students = {students}
        toggleList = {toggleList}
      />

      <AbsentStudentList
        students = {students}
        toggleList = {toggleList}
      />
    </div>
  )
}

export default StudentSection