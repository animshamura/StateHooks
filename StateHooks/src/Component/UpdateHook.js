import React,{useState,useEffect} from 'react'

export default function UpdateHook() {
    const [count,setCount] = useState(0)
    useEffect(()=> {
        document.title = 'You have clicked '+count+' times'
    })
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=> setCount(count+2)}>Click</button>
    </div>
  )
}
