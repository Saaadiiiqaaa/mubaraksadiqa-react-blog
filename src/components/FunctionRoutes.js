import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Bollywood from './Bollywood'
import TopNAv from './topnavigations'
function FunctionRoutes() {
  return (

   <BrowserRouter>
      <TopNAv/>

   <Routes>
    <Route  path="/" element={<Home/>}/>
    <Route path="/Bollywood" element={<Bollywood/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default FunctionRoutes