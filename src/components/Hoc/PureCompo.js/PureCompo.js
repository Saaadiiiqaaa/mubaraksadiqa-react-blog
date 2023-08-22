import React, { useMemo, useState } from 'react'

function PureCompo() {
    const [count,setcount]=useState(0);
    const handle=()=>{
     setcount(count+1)
}  
const memofunc=useMemo(()=>count,[count])
return (
    <div>
        <h1>{count}</h1>
        <p>{memofunc}</p>
        <button onClick={handle}>click</button>
    </div>
  )
}

export default PureCompo