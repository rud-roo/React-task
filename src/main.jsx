import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import add from './demo.jsx'
import StudentProvider from './components/contexts/Student.jsx'
import App2 from './App2.jsx'

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <StrictMode>
    // <StudentProvider>
    //   <App />
    // </StudentProvider>
    <App2/>
  // </StrictMode>,
)
