import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [noteTitle, setNoteTitle] = useState("")
  const [notes, setNotes] = useState([
    {id:1, title: "Note 1"},
    {id:2, title: "Note 2"},
    {id:3, title: "Note 3"},
  ])

  // const changeTitleHandler = (event) => {
  //   console.log(event.target.value)
  //   setNoteTitle(event.target.value);
  // }

  const submitHandler = (event)=>{
    event.preventDefault();
    if (noteTitle.trim()==="") return alert("Please enter a valid title");
    const newNote = {
      id: Date.now() + "",
      title: noteTitle
    }
    setNotes([...notes, newNote]);
    setNoteTitle("")
  }

  const removeHandler = (noteId)=>{
    const updatedNotes = notes.filter((note) => note.id !== noteId);

    setNotes(updatedNotes);
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
        <button type="submit">Add note</button>
      </form>

      <ul>
        {notes.map((note)=>(
          <li className='note-title' key={note.id}>
            <span>{note.title}</span>
            <button>Edit</button>
            <button onClick={()=>removeHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
