import React, { useContext } from 'react'
import { StudentContext } from './contexts/Student';

const PresentStudentList = () => {

  const {students, toggleList} = useContext(StudentContext);

  const presentList = students.filter(
    (student) => student.isPresent===true
  );

  return (
    <div className="list present-list">
        <h2>Present Students</h2>
        <ul>
        {presentList.map((student) => (
            <li className="list-item">
            <span>{student.name}</span>
            <button onClick={()=>toggleList(student.id)}>Accidentaly Added</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default PresentStudentList