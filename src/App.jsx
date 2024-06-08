import { useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm'
import Students from './components/Students'


function App() {
	const [noteTitle, setNoteTitle] = useState("")
	const [notes, setNotes] = useState([
		// {id:1, title: "ntoe 1"},
		// {id:2, title: "ntoe 2"},
		// {id:3, title: "ntoe 3"},
	])
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	return(
		<div className="App">
			<StudentForm
				noteTitle = {noteTitle}
				setNoteTitle = {setNoteTitle}
				notes = {notes}
				setNotes = {setNotes}
				editMode = {editMode}
				setEditMode = {setEditMode}
				editableNote = {editableNote}
				setEditableNote = {setEditableNote}
			/>

			<Students
				setNoteTitle = {setNoteTitle}
				notes = {notes}
				setNotes = {setNotes}
				setEditMode = {setEditMode}
				setEditableNote = {setEditableNote}
			/>
		</div>
	)
}

export default App
