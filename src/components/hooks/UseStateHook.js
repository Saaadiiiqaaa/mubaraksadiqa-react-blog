import React, { useContext } from 'react'
import { useState ,useEffect } from 'react'
import { contextbox } from './UseContextHook'


function UseStateHook() {
    //-------------------------usestate and useffect
//     const [Count ,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("hii");
//     },[Count])
//   return (
//     <diV>
//         <h1>{Count}</h1>
//     <button onClick={()=>setCount(Count+1)}>Click</button>
//     </diV>
//   )
//----------------------------------------------------cleanup function

// const [data , setdata]=useState(null);
// useEffect(()=>{
//     const timer=setTimeout(()=>{
//         setdata("2 sec delay in fetching the data");
    
// },3000);
// return()=>{
//     clearTimeout(timer);
//     console.log("timer")
// };
// },[]);
// return (
//     <div>DAta:{data}</div>
// )

//-------------------------------------------------------context api-
// const contextdata=useContext(contextbox)
// return(
// <div>{contextdata.age}</div>
// )

//------use reducer hook--------------


}



export default UseStateHook