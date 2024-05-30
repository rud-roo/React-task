const StudentForm = (props) => {
    const {studentName, setStudentName, students, setStudents, editMode, setEditMode, editableStudent, setEditableStudent} = props;

    const submitHandler = (event) => {
		event.preventDefault();
		if(studentName.trim()==="") return alert("Please provide a valid student name.");

		editMode ? updateHandler() : createHandler();
	};

	const createHandler = () => {
		const newStudent = {
			id: Date.now() + "",
			name: studentName,
			isPresent: undefined,
		}

		setStudents([...students, newStudent]);
        setStudentName("");
	};

    const updateHandler = () => {
		const updatedStudents = students.map((student) => {
			if(editableStudent.id===student.id){
				return {...student, name: studentName};
			}
			return student
		})

		setStudents(updatedStudents);
		setStudentName("");
		setEditMode(false);
		setEditableStudent(null);
	};
    
    return(
        <form onSubmit={submitHandler}>
            <input
                type="text"
                value={studentName}
                onChange={(e) => {
                    setStudentName(e.target.value);
                }}
            />
            <button type="submit">
                {editMode ? "Update student" : "Add student"};
            </button>
        </form>
    )
}

export default StudentForm