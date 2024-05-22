import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BioData from './components/BioData'


function App() {
	// let count = 0;
	const [count, setCount] = useState(0)

	const increaseHandler = () => {
		setCount(count+1)
	}
	const decreaseHandler = () => {
		setCount(count-1)
	}

	return (
		<div className="App">
			<h2>Counter value: {count}</h2>
			<button onClick={increaseHandler}>Increase</button>
			<button onClick={decreaseHandler}>Decrease</button>
		</div>
	)
}

export default App
