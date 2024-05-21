import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './components/BioData'

const bioDataInfos = [
	{
		id: Date.now() + "",
		name:"Rudro",
		age:23,
		email:"saharudro15@gmail.com",
		skills: ["c++", "python", "java script", "react"],
		interests: ["traveling", "tech", "music"],
		socialLinks: [
			{mediaName: "Fb", mediaAddress: "www.facebook.com/rudro.saha.332/"},
			{mediaName: "Github", mediaAddress: "https://github.com/rud-roo"}
		],
	},
	{
		id: Date.now() + "",
		name:"Maruf",
		age:23,
		email:"maruf@gmail.com",
		skills: ["mysql", "php", "java script", "react"],
		interests: ["traveling", "tech", "music", "Geo Politics"],
		socialLinks: [
			{mediaName: "Fb", mediaAddress: "www.facebook.com/maruf"},
			{mediaName: "Github", mediaAddress: "https://github.com/maruf"}
		],
	},
	{
		id: Date.now() + "",
		name:"Niloy",
		age:23,
		email:"niloy@gmail.com",
		skills: ["html", "php", "java script", "css"],
		interests: ["traveling", "business", "music", "Geo Politics"],
		socialLinks: [
			{mediaName: "Fb", mediaAddress: "www.facebook.com/niloy"},
			{mediaName: "Github", mediaAddress: "https://github.com/niloy"}
		],
	}
]

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			{bioDataInfos.map((bioData) => (
				<BioData
					key={bioData.id}
					name={bioData.name}
					age={bioData.age}
					email={bioData.email}
					skills={bioData.skills}
					interests={bioData.interests}
					socialLinks={bioData.socialLinks}
				/>
			))}
		</div>
	)
}

export default App
