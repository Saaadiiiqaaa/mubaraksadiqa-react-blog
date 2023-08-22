import React, {  useState } from 'react'
import SecondFunc from './SecondFunc'

function HighOrder(TheWrapper) {
    const HocFunctionality=()=>{
        const [count ,setcount]=useState(0)
        const handleSubmit=()=>{
            setcount(count+1)
        }
        return(
        
             <TheWrapper value={count} onSubmit={handleSubmit}/>
       
        )
        
    }
    

  return   HocFunctionality;
  
}

export default HighOrder
