import { useContext } from "react";
import { StudentContext } from "./contexts/Student";

const AbsentStudentList = () => {
	const { studentStates, dispatchStudentAction } = useContext(StudentContext);
	return (
		<div className="list absent-list">
			<h2>Absent Students</h2>
			{studentStates.students
				.filter((student) => student.isPresent === false)
				.map((student) => (
					<li className="list-item" key={student.id}>
						<span>{student.name}</span>
						<button
							onClick={() =>
								dispatchStudentAction({
									type: "UPDATE_PRESENT_STATUS",
									payload: {
										id: student.id,
										isPresent: !student.isPresent,
									},
								})
							}
						>
							Accidentally Added
						</button>
					</li>
				))}
		</div>
	);
};

<<<<<<< Updated upstream
  const {studentStates, dispatchStudentAction,} = useContext(StudentContext);

  const absentList = studentStates.students.filter(
    (student) => student.isPresent===false
  );

  return (
    <div className="list absent-list">
        <h2>Absent Students</h2>
        <ul>
        {absentList.map((student) => (
            <li className="list-item">
            <span>{student.name}</span>
            <button 
              onClick={()=>
                dispatchStudentAction({
                  type: "UPDATE_PRESENT_STATUS",
                  payload: {
                    id: student.id,
                    isPresent: !student.isPresent,
                  },
                })
              }
            >
              Accidentaly Added
            </button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default AbsentStudentList
=======
export default AbsentStudentList;
>>>>>>> Stashed changes
