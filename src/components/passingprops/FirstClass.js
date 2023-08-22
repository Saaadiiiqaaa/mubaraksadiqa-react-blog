import React from 'react'
import ChildClass from './ChildClass'

function FirstClass() {
    const handleClick=(data)=>{
       console.log("received by parents ",data)
    }
  return (

    <div>
        {/* welcome to prepbytes */}
        <ChildClass  callback={handleClick}/>  
    </div>

  )
}

export default FirstClass