import React, { useMemo, useState } from 'react'
import { useCallback } from 'react';
// import UseMemoHook from './UseMemoHook';
import ChildCompo from './childcompo';

function Usecallbackhook() {
   const [Count ,setCount]=useState(0);
   const handle=useCallback(()=>{
  
   },[])
  const memoisedcount=useMemo(()=>
  <ChildCompo handle={handle}/>,[handle])
   

   return(
      <div>
    {Count}
    {memoisedcount}
    
    <button onClick={()=>setCount(Count+1)}>+</button>
    </div>
    
   )
}

export default Usecallbackhook