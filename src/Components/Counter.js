import React,{useState} from 'react'

function Counter() {
    let [count, setCount] = useState(0)
    
    return (
        <div >
            
            <h2>Counter Value is : {count} </h2>
            <button  onClick={()=>{setCount(++count)}}>Increment</button>
            
            <button onClick={()=>{setCount(--count)}}>Decrement</button>
        </div>
    )
}

export default Counter
