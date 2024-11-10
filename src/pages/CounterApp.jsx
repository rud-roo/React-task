import { useCallback, useState } from "react";
import { useCounter } from "../hooks/counterHook";
import Button from "../components/Button";
import Title from "../components/title";

const CounterApp = () => {
	console.log("Rendering counter app.")
	const [counter, setCounter] = useState(0);
	const [counter2, setCounter2] = useState(0);
	const [counter3, setCounter3] = useState(0);

	const increaseHandler = useCallback(() => {
		setCounter((currVal) => currVal+1);
	}, [])
	const increaseHandler2 = useCallback(() => {
		setCounter2((currVal) => currVal+1)
	}, )

	return (
		<div>
			<Title/>
			<p>The value of the counter is {counter}</p>
			<Button clickHandler={increaseHandler} />
			<hr />
			<p>The value of the counter is {counter2}</p>
			<Button clickHandler={increaseHandler2} />
			<hr />
			<p>The value of the counter is {counter3}</p>
			<button onClick={() => setCounter3(counter3+10)}>Increase by 10</button>
		</div>
	);
};

export default CounterApp;