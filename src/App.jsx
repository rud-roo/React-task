import { useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import StudentSection from './components/StudentSection'

function App() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([
		// {id: 1, name: "Rudro", isPresent: undefined},
		// {id: 2, name: "Niloy", isPresent: false},
		// {id: 3, name: "Maruf", isPresent: true},
	])
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);


	return(
		<div className="App">
			<StudentForm
				studentName={studentName}
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				editMode={editMode}
				setEditMode={setEditMode}
				editableStudent={editableStudent}
				setEditableStudent={setEditableStudent}
			/>

			<StudentSection
				setStudentName={setStudentName}
				students={students}
				setStudents={setStudents}
				setEditMode={setEditMode}
				setEditableStudent={setEditableStudent}
			/>
		</div>
	)
}

export default App
