import React from 'react'
import { useReducer } from 'react'


const intialState={
    count:0
   }
const reducer =(State,Action)=>{
       switch(Action.type){
        case "increment": return {count: State.count+1};
        case 'decrement': return {count: State.count-1};
        case "reset": return{count: 0};
        default: return State;
       }
   }
   function UseReducerHook() {
    const [State ,dispatch]=useReducer(reducer,intialState)
  return (
    <div>
        {State.count}
        <button onClick={()=>dispatch({type:"increment"})} >increment</button>
        <button onClick={()=>dispatch({type:"decrement"})} >decrement</button>
        <button onClick={()=>dispatch({type:"reset"})} >reset</button>
    </div>
  )
}

export default UseReducerHook