import React, { useState, useEffect } from 'react'

const EffectState = () => {


    let [count,setcount] = useState(0)

    useEffect(() =>console.log("working"),[])



  return ( 
    <>

    <h1>useEffect State</h1>

    <h1>{count}</h1>

    <button onClick={()=> setcount(count+1)} className='border rounded-2xl'>+++++</button>



    



    
    
    </>
  )
}

export default EffectState
