import React, { useState } from 'react'

function ChildClass(props) {
  const [value,setvalue]=useState('');
    console.log(value)
    const send=()=>{
      props.callback(value);
      setvalue("")
    }
    props.callback("sadiqa");
  return (
    <div>
        {/* {props.text}
     <button onClick={props.handleClick}>clickme </button> 
     welcome to ea223 */}
     <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} />
   <button onClick={send}>enter</button>
     </div>
   
  )
}

export default ChildClass