import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './components/StudentForm';
import StudentSection from './components/StudentSection';



function App() {


  return (
    <div className="App">
      <StudentForm/>
      <StudentSection/>
    </div>
  )
}

export default App
