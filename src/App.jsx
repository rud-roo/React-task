import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './components/BioData'


function App() {
	const [noteTitle, setNoteTitle] = useState("")
	const [notes, setNotes] = useState([
		// {id:1, title: "ntoe 1"},
		// {id:2, title: "ntoe 2"},
		// {id:3, title: "ntoe 3"},
	])
	const [editMode, setEditMode] = useState(false);
	const [editableNote, setEditableNote] = useState(null);

	const submitHandler = (event) => {
		event.preventDefault();

		if(noteTitle.trim() === "") return alert("Please enter valid note");

		editMode ? updateHandler() : createHandler();
	}

	const createHandler = () => {
		const newNote = {
			id: Date.now(),
			title: noteTitle
		}

		setNotes([...notes, newNote])
		setNoteTitle("")
	}

	const removeHandler = (noteId) => {
		const updatedNotes = notes.filter((note) => note.id !== noteId)

		setNotes(updatedNotes)
	}

	const editHandler = (note) => {
		setEditMode(true)
		setNoteTitle(note.title)
		setEditableNote(note)
	}

	const updateHandler = () => {
		const updatednoteList = notes.map((note) => {
			if(note.id === editableNote.id){
				return {...note, title: noteTitle}
			}
			return note
		})

		setNotes(updatednoteList)
		setNoteTitle("")
		setEditMode(false)
		setEditableNote(null)
	}

	// const changeTitleHandler = (event) => {
	// 	console.log(event.target)
	// 	setNoteTitle(event.target.value)
	// }

	return(
		<div className="App">
			<form className={editMode ? "form":""} onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(event) => {
						// console.log(event.target)
						setNoteTitle(event.target.value)
					}}
				/>
				<button type="submit">
					{editMode ? "Update note" : "Add note"}
				</button>
			</form>

			<ul>
				{notes.map((note) => (
					<li>
						<span>{note.title}</span>
						<button onClick={() => editHandler(note)}>
							Edit
						</button>
						<button onClick={() => removeHandler(note.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
