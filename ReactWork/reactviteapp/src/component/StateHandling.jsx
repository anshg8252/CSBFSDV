import {useState} from 'react'
import React from 'react'

function StateHandling() {
    const [counter,setCounter]=useState(20);

function incrementCounter(){
    setCounter(counter+1);
}
  return (
    <div>
        <h2>Counter value={counter}</h2>
        <button onClick={incrementCounter}>Increment Count</button>
        <button onClick={()=>setCounter(counter-1)}>Decrement Count</button>
    </div>
  )

}

export default StateHandling