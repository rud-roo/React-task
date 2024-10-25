import { useContext } from "react";
import { StudentContext } from "./contexts/Student";

const PresentStudentList = () => {
	const { studentStates, dispatchStudentAction } = useContext(StudentContext);
	return (
		<div className="list present-list">
			<h2>Present Students</h2>
			{studentStates.students
				.filter((student) => student.isPresent === true)
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

  const presentList = studentStates.students.filter(
    (student) => student.isPresent===true
  );

  return (
    <div className="list present-list">
        <h2>Present Students</h2>
        <ul>
        {presentList.map((student) => (
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

export default PresentStudentList
=======
export default PresentStudentList;
>>>>>>> Stashed changes
