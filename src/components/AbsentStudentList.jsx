import React, { useContext } from 'react'
import { StudentContext } from './contexts/Student';

const AbsentStudentList = () => {

  const {students, toggleList} = useContext(StudentContext);

  const absentList = students.filter(
    (student) => student.isPresent===false
  );

  return (
    <div className="list absent-list">
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
  )
}

export default AbsentStudentList