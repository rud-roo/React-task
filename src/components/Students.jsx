const Students = (props) => {

    const {setNoteTitle, notes, setNotes, setEditMode, setEditableNote} = props

    const removeHandler = (noteId) => {
		const updatedNotes = notes.filter((note) => note.id !== noteId)

		setNotes(updatedNotes)
	}

	const editHandler = (note) => {
		setEditMode(true)
		setNoteTitle(note.title)
		setEditableNote(note)
	}

    return(
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
    )
}

export default Students