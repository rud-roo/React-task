import { useSelector, useDispatch } from 'react-redux'

const CounterApp = () => {
	const counter = useSelector((storeState) => storeState.counter)
	const dispatch = useDispatch();

	return (
		<div>
			<p>The value of Counter: {counter}</p>
			<button onClick={() => 
				dispatch({
					type: "counter/incremented",
					payload: 1
				})
			}>
				Increase by 1
			</button>
			<button onClick={() => 
				dispatch({
					type: "counter/decremented",
					payload: 1
				})
			}>
				Decrease by 1
			</button>
			<button onClick={() => 
				dispatch({
					type: "counter/incremented",
					payload: 5
				})
			}>
				Increase by 5
			</button>
		</div>
	);
};

export default CounterApp;