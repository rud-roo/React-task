/* eslint-disable no-unused-vars */
import { useState } from "react";
import { 
	useGetAllNotes,
	useCreateNote,
	useRemoveNote,
	useUpdateNote
 } from "../hooks/server-states/note";

const NoteList = () => {
	const [noteTitle, setNoteTitle] = useState("");
	const { isFetching, isError, error, notes } = useGetAllNotes();
	const createMutation = useCreateNote();
	const updateMutation = useUpdateNote();
	const removeMutation = useRemoveNote();

	const submitHandler = (e) => {
		e.preventDefault();
		const newNote = {
			title: noteTitle,
			isCompleted: false
		};
		createMutation.mutate(newNote);
		setNoteTitle("");
	};

	const removeHandler = (id) => {
		removeMutation.mutate(id);
	};

	const updateHandler = (note) => {
		const {id, ...rest} = note;
		const updatedNote = {
			id: id,
			...rest,
			isCompleted: !note.isCompleted
		}
		updateMutation.mutate(updatedNote)
	}

	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					value={noteTitle}
					onChange={(e) => setNoteTitle(e.target.value)}
				/>
			</form>
			<ul>
				{notes?.map((note) => (
					<li key={note.id}>
						<input 
							type="checkbox"
							checked = {note.isCompleted}
							onChange={() => updateHandler(note)}
						/>
						<span>{note.title}</span>
						<button onClick={() => removeHandler(note.id)}>
							Remove Note
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default NoteList;