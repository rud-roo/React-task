import { useContext } from "react";
import { StudentContext } from "./contexts/Student";


const StudentForm = () => {
<<<<<<< Updated upstream
  const {
    studentStates,
    dispatchStudentAction,
    submitHandler,
  } = useContext(StudentContext);
=======
	const { studentStates, dispatchStudentAction, submitHandler } =
		useContext(StudentContext);
>>>>>>> Stashed changes

	return (
		<form onSubmit={submitHandler} className="form">
			<input
				type="text"
				value={studentStates.studentName}
				onChange={(e) =>
					dispatchStudentAction({
						type: "CHANGE_STUDENT_NAME",
						payload: e.target.value,
					})
				}
			/>
			<button type="submit">
				{studentStates.editMode ? "Update Student" : "Create Student"}
			</button>
		</form>
	);
};

<<<<<<< Updated upstream

  return (
    <form  className="form" onSubmit={submitHandler}>
      <input 
          type="text" 
          value={studentStates.studentName} 
          onChange={(e)=>dispatchStudentAction({
            type: "CHANGE_STUDENT_NAME",
            payload: e.target.value,
          })}
      />
      <button type="submit">
          {studentStates.editMode ? "Update student" : "Add student"}
      </button>
    </form>
  )
}

export default StudentForm
=======
export default StudentForm;
>>>>>>> Stashed changes
