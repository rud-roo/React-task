import React from 'react'

const AbsentStudentList = (props) => {

  const absentList = props.students.filter(
    (student) => student.isPresent===false
  );

  return (
    <div className="absent-list">
        <h2>Absent Students</h2>
        <ul>
        {absentList.map((student) => (
            <li className="list-item">
            <span>{student.name}</span>
            <button onClick={()=>props.toggleList(student.id)}>Accidentaly Added</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default AbsentStudentList