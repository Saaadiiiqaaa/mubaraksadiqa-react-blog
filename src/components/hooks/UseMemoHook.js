import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import ChildCompo from './childcompo'


function UseMemoHook() {
    const [Count ,setCount]=useState(0)

    const getchildcompo= useMemo(()=> <ChildCompo/>,[Count])
    // const multiple=()=>{
    //     //some code
    //    }

       return(
        <div>
        {Count}

        {getchildcompo}

        <button onClick={()=>setCount(Count+1)}>+</button>
        </div>
       )
}

export default UseMemoHook