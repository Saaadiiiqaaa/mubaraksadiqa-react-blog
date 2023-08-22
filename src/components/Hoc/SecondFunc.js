import React from 'react'
import HighOrder from './HighOrder'

function SecondFunc(props) {
  return (
    <div>
       <h1>{props.value}</h1> 
        <button onMouseOver={props.onSubmit}>add</button>
    </div>
  )
}

export default HighOrder(SecondFunc)