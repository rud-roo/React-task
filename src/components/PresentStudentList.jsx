import React from 'react'

const PresentStudentList = (props) => {

  const presentList = props.students.filter(
    (student) => student.isPresent===true
  );

  return (
    <div className="present-list">
        <h2>Present Students</h2>
        <ul>
        {presentList.map((student) => (
            <li className="list-item">
            <span>{student.name}</span>
            <button onClick={()=>props.toggleList(student.id)}>Accidentaly Added</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default PresentStudentList