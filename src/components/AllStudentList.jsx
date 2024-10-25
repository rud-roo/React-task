import React, { useContext } from 'react'
import { StudentContext } from './contexts/Student';

const AllStudentList = () => {

  const {
    studentStates,
    dispatchStudentAction,
  } = useContext(StudentContext);




  return (
    <div className="list all-list">
        <h2>All Students</h2>
        <ul>
        {studentStates.students.map((student)=>(
            <li className="list-item">
            <span>{student.name}</span>
            <button 
              onClick={()=>
                dispatchStudentAction({
                  type: "EDIT_STUDENT",
                  payload: student,
                })
              }
            >
              Edit
            </button>
            <button 
              onClick={()=>
                dispatchStudentAction({
                  type: "REMOVE_STUDENT",
                  payload: student.id,
                })
              }
            >
              Remove
            </button>
            <button 
              onClick={()=>
                dispatchStudentAction({
                  type: "UPDATE_PRESENT_STATUS",
                  payload: {
                    id: student.id,
                    isPresent: true,
                  },
                })
              }
            >
              Send to Present List
            </button>
            <button 
              onClick={()=>
                dispatchStudentAction({
                  type: "UPDATE_PRESENT_STATUS",
                  payload: {
                    id: student.id,
                    isPresent: false,
                  },
                })
              }
            >
              Send to Absent List
            </button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default AllStudentList