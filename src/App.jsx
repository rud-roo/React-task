import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StudentForm from './components/StudentForm';
import StudentSection from './components/StudentSection';



function App() {
  const [posts, setPosts] = useState([]);
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
      .then((res) => res.json())
      .then((data)=>{
        setPosts(data)
        // console.log("inside")
      })
  },[]);
    
    // console.log("outside")

  return (
    <div className="App">
      {/* <StudentForm/>
      <StudentSection/> */}

      <div className="counterApp">
        <h1>the value of the counter is {counter}</h1>
        <button onClick={()=>setCounter(counter+1)}>
          Increase by 1
        </button>
        <button onClick={()=>setCounter(counter-1)}>
          Decrease by 1
        </button>
      </div>

      <hr />

      <div className="counterApp2">
        <h1>the value of the counter is {counter2}</h1>
        <button onClick={()=>setCounter2(counter2+1)}>
          Increase by 1
        </button>
        <button onClick={()=>setCounter2(counter2-1)}>
          Decrease by 1
        </button>
      </div>

      <ul>
        {posts.map((post)=>(
          <li key={post}>{post.title}</li>
        ))}
      </ul>

    </div>
  )
}

export default App
