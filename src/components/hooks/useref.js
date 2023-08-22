import React from 'react'
import { useRef } from 'react'
function UseRef() {
    
 const input =useRef(null)
//  console.log(input.current.value);
 const show=()=>{
   console.log(input.current.value)
 }
  return (
    <div>
        
        <input type='text' ref={input}/>
        <button onClick={()=>{show()}}>show</button>
    </div>
  )
}

export default UseRef