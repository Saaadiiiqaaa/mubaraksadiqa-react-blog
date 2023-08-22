import React from 'react'
import { createContext, useState } from 'react'
import UseStateHook from './UseStateHook';

export const contextbox= createContext();
console.log("created");
function UseContextHook() {
    const [data,setdata]=useState({
        name:"sadiqa",
        age:23
    }
   
       
    )
    console.log(data);
    
  return (
    <div>
       
         <contextbox.Provider value={data}>
         
             <UseStateHook/>
            
         </contextbox.Provider>
    </div>
  )
}

export default UseContextHook