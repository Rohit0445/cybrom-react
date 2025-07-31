import React, { useState } from 'react'

const State = () => {

    // let [text,setText] = useState("Hello")
    let [a,setA] = useState(true)
    
   
  return (
   <>

   {/* <h1>{text}</h1> */}

   {/* <button onClick={ ()=> setText("")} > Hide</button> */}


    {a ? "" : <h1 >Hide ME  </h1>}

        <br /><br />


        
        <button onClick={()=>setA(!a)}>{a ? "Show":"Hide"}</button>
        



   
   
   </>
  )
}

export default State
