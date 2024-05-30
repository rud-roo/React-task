import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './components/BioData'


function App() {
	const [studentName, setStudentName] = useState("");
	const [students, setStudents] = useState([
		{id: 1, name: "Rudro", isPresent: undefined},
		{id: 2, name: "Niloy", isPresent: false},
		{id: 3, name: "Maruf", isPresent: true},
	])
	const [editMode, setEditMode] = useState(false);
	const [editableStudent, setEditableStudent] = useState(null);

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
	};

	const editHandler = (student) => {
		setEditMode(true);
		setStudentName(student.name);
		setEditableStudent(student);
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
	
	const toggleHandler = (student) => {
		const updatedStudents = students.map((item) => {
			if(student.id === item.id) {
				return {...item, isPresent: !item.isPresent};
			}
			return item;
		})

		setStudents(updatedStudents);
	}

	return(
		<div className="App">
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

			<div className="student-section">
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

				<div className="present-student">
					<h2>Present Student</h2>
					<ul className='list'>
						{students.filter((student)=> student.isPresent===true).map((student) => (
							<li className='list-item' key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => toggleHandler(student)}>
									Accidentally added
								</button>
							</li>
						))}
					</ul>
				</div>

				<div className="absent-student">
					<h2>Absent Student</h2>
					<ul className='list'>
						{students.filter((student)=> student.isPresent===false).map((student) => (
							<li className='list-item' key={student.id}>
								<span>{student.name}</span>
								<button onClick={() => toggleHandler(student)}>
									Accidentally added
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default App
