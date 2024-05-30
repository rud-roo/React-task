

const AllStudnets = (props) => {
    const {setStudentName, students, setStudents, setEditMode, setEditableStudent} = props

    const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
	};

    const removeHandler = (student) => {
		const updatedStudents = students.filter((item) => item.id !== student.id)
		setStudents(updatedStudents);
	};

	const sendToPresentList = (student) => {
		if(student.isPresent !== undefined){
			return alert(`This student is already in the ${student.isPresent===true ? "Present List" : "Absent List"}`);
		}

		const updatedStudents = students.map((item) => {
			if(student.id === item.id){
				return {...item, isPresent:true};
			}
			return item;
		})

		setStudents(updatedStudents);
	};

	const sendToAbsentList = (student) => {
		if(student.isPresent !== undefined){
			return alert(`This student is already in the ${student.isPresent===true ? "Present List" : "Absent List"}`);
		}

		const updatedStudents = students.map((item) => {
			if(student.id === item.id){
				return {...item, isPresent:false};
			}
			return item;
		})

		setStudents(updatedStudents);
	};

    return(
        <div className="all-student">
            <h2>All Student</h2>
            <ul className='list'>
                {students.map((student) => (
                    <li className='list-item' key={student.id}>
                        <span>{student.name}</span>
                        <button onClick={() => editHandler(student)}>
                            Edit
                        </button>
                        <button onClick={() => removeHandler(student)}>
                            Delete
                        </button>
                        <button onClick={() => sendToPresentList(student)}>
                            Send to present list
                        </button>
                        <button onClick={() => sendToAbsentList(student)}>
                            Send to absent list
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default AllStudnets;