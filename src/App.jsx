import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './components/BioData'

const bioDataInfos = [
  {
    id: Date.now() + "",
    name: "Rudro",
    age: 23,
    email: "saharudro15@gmail.com",
    skills: ["JavaScripts", "React", "Django"],
    interests: ["Cricket", "Chess", "Travel"],
    socialLinks: [
      {mediaName: "Fb", mediaAddress: "https://www.facebook.com/rudro.saha.332/"},
      {mediaName: "Github", mediaAddress: "https://github.com/rud-roo"}
    ],
  },
  {
    id: Date.now() + "",
    name: "Niloy",
    age: 23,
    email: "niloy@gmail.com",
    skills: ["JavaScripts", "React", "Django"],
    interests: ["Cricket", "Chess", "Travel"],
    socialLinks: [
      {mediaName: "Fb", mediaAddress: "https://www.facebook.com/rudro.saha.332/"},
      {mediaName: "Github", mediaAddress: "https://github.com/rud-roo"}
    ],
  },
]

function App() {
  console.log("I am called.");
  const name = "Rudro";
  const skills = ["js", "react", "redux"];

  return (
    <div className="App">
      {bioDataInfos.map((bioData)=>(
        <BioData
          key = {bioData.id}
          name = {bioData.name}
          age = {bioData.age}
          skills = {bioData.skills}
          interests = {bioData.interests}
          socialLinks = {bioData.socialLinks}
        />
      ))}
    </div>
  )
}

export default App
