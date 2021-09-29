import React,{useState} from 'react'
import './App.css';
import Counter from './Components/Counter';


function App() {
  let [day , setDay] = useState(true)
  return (
    <div className={` ${day ? 'day1' : 'night' }`}>
      <header className="App-header">
      <h1 class="text-blue-450">{day} Time</h1>
        <Counter/>
        <button className="change-btn" onClick={()=>{setDay(!day) }}> Change </button>
        {console.log(day)}
      </header>
    </div>
  );
}

export default App;
