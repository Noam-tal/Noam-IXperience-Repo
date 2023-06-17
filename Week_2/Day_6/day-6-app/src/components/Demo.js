import React, {useState} from 'react'
import './Demo.css';

export default function Demo(props) {
    const [count, setCount] = useState(props.count); 

    function Increment(){
        setCount(count + 1)
    }

    function Decrement(){
        setCount(count - 1)
    }

  return (
    <div className = 'example-card m-5 p-3'> 
    <h5>Name: {props.name}</h5>
    <h5>Title: {props.title}</h5>

    <p className='text-center'>
        Each component etc
    </p>
    
    <div className='text-center'>
        <div>{count}</div>
        <button onClick = {Decrement} className='btn btn-danger me-1 mt-3'>Decrement</button>
        <button onClick = {Increment} className='btn btn-primary ms-1 mt-3'>Increment</button>

    </div>
    </div>
  )
}
