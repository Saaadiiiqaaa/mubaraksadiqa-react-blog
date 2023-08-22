import React, { useState,useEffect } from 'react'
import FirstClass from './FirstClass'
import ChildClass from './ChildClass'
import axios from 'axios'
import '../../App.css'

function RenderClass() {
    // const [Show , setShow]= useState(true)
    const [Data ,setData] =useState([])
    // useEffect(()=> {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=>(res.json()))
    //     .then((d)=>setData(d))
    // },[])
    // console.log(Data)

    useEffect(()=>{
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(Data)
  
  return (
    <div>
        fetch

        {/* {Show ?<FirstClass/>:<ChildClass/>}
        <button onClick={()=>setShow(!Show)}>
        toggle
        </button> */}
      {/* <ul>
        {
            Data.map((item,index)=>(
                <div key={index}>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                </div>
            ))
        }
      </ul> */}
        
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                </tr>
            </thead>
            {Data.map((item,index)=>{
                return(
            <tbody>
                <tr keys={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                </tr>
            </tbody>
                )
            })}
        </table>
        
    </div>
  )
}

export default RenderClass