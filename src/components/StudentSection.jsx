import React, { useContext } from 'react'
import AllStudentList from './AllStudentList'
import PresentStudentList from './PresentStudentList'
import AbsentStudentList from './AbsentStudentList'
import { StudentContext } from './contexts/Student'

const StudentSection = () => {


  return (
    <div className="student-section">
      <AllStudentList/>

      <PresentStudentList/>

      <AbsentStudentList/>
    </div>
  )
}

export default StudentSection