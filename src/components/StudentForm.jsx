const StudentForm = (props) => {

    const {noteTitle, setNoteTitle, notes, setNotes, editMode, setEditMode, editableNote, setEditableNote} = props

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

    return (
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
    )
}

export default StudentForm