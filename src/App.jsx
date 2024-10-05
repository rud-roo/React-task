import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  // let counter = 0;
  const [dynamicCounter, setDynamicCounter] = useState(0);

  const increaseHandler = () => {
    // counter++;
    // console.log("counter:", counter);
    setDynamicCounter(dynamicCounter+1);
  };

  const decreaseHandler = () => {
    // counter--;
    setDynamicCounter(dynamicCounter-1)
  };

  return (
    <div className="App">
      <p>The value of the counter is {dynamicCounter}</p>
      <button onClick={increaseHandler}>Increase by 1</button>
      <button onClick={decreaseHandler}>Decrease by 1</button>
    </div>
  )
}

export default App
