import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([
    // {id:1, title: "Note 1"},
    // {id:2, title: "Note 2"},
    // {id:3, title: "Note 3"},
  ]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const getAllNotes = () => {
    fetch(`http://localhost:3000/notes`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
      });
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const submitHandler = (event)=>{
    event.preventDefault();
    if (noteTitle.trim()==="") return alert("Please enter a valid title");
    editMode ? updateHandler() : createHandler();
  }

  const createHandler = () => {
    const newNote = {
      id: Date.now() + "",
      title: noteTitle
    }
    
    fetch(`http://localhost:3000/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-type": "application/json",
      }
    }).then(() => {
      getAllNotes();
    })
    setNoteTitle("")
  }

  const removeHandler = (noteId)=>{
    // const updatedNotes = notes.filter((note) => note.id !== noteId);

    // setNotes(updatedNotes);

    fetch(`http://localhost:3000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getAllNotes()
    })
  }

  const editHandler = (note) => {
    setEditMode(true);
    setNoteTitle(note.title);
    setEditableNote(note);
  }

  const updateHandler = () => {
    // const updatedNoteList = notes.map((note) => {
    //   if(note.id === editableNote.id){
    //     return {...note, title: noteTitle};
    //   }
    //   return note;
    // })

    const updatedNote = {
      ...editableNote,
      title: noteTitle,
    }

    fetch(`http://localhost:3000/notes/${editableNote.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedNote),
      headers: {
        "Content-type": "application/json"
      }
    }).then(() => {
      getAllNotes()
    })

    // setNotes(updatedNoteList);
    setNoteTitle("");
    setEditMode(false);
    setEditableNote(null);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input 
          type="text"
          value={noteTitle}
          onChange={(event)=>{
            setNoteTitle(event.target.value);
          }}
        />
        <button type="submit">
          {editMode ? "Update note" : "Add note"}
        </button>
      </form>

      <ul>
        {notes.map((note)=>(
          <li className='note-title' key={note.id}>
            <span>{note.title}</span>
            <button onClick={()=>editHandler(note)}>Edit</button>
            <button onClick={()=>removeHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App