import { useState } from "react"




function Counter(){

    
     let [counter,setCounter]=useState(0)
    

     
    

    function Plus(){
      setCounter(counter+1)

      
      }

    

    function Minus(){
      setCounter(counter-1)

      if (counter <= 0){
        setCounter(0)
      }

    }

     
     return(
      <>

      {/* <h1 style={{color:counter%2!=0?"red":"black"}}>{counter}</h1> */}

      

      {/* <button onClick={Plus}>PLUS</button>
      <button onClick={Minus}>Minus</button>
      <button onClick={()=> setCounter(0)}>Reset</button> */}


      
      
      </>
     )



}


export default Counter