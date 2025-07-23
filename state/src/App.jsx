// import { useState } from "react"


// function App(){
//   let [name,setName] = useState("Rohit",24)
//   let [age,setAge] = useState(24)
//   let [contacts,setContacts] = useState(7999932294)


//   function fun(){
//     setName("Ajay")
    
//   }


  
//   function fun1(){
    
//     setAge(23)
//   }

  
//   // function fun2(){
    
//   //   setContacts(9993047751)
//   // }
   
   
//   return(
//     <>
//       <h1>My name is {name} </h1><br /> 
//       <button onClick={fun}>change Name</button>
      
//       <h1>My age is {age}</h1>
//       <button  onClick={fun1}>change Age</button>

//       <h1>My Contact is {contacts}</h1>
//       <button  onClick={()=>setContacts(9993047751)}>change Contact</button>
//     </>
//   )

// }

// export default App

// import { useState } from "react"


// function App(){

//   let [Counter,setName] = useState(0)

//   function fun(){
//     setName(Counter+1)
//   }
 

//   function fun1(){
//     setName(Counter-1)
//   }

//   return(
//     <>
//      <h1>{Counter}</h1>

//      <button onClick={fun}>Plus</button>
//      <button onClick={fun1}>Minus</button>
//     </>
//   )
// }



// export default App



import { useState } from "react"
import Counter from "./Components/Counter"
import Arr from "./Components/Array"
import Togle from "./Components/Togle"
import { ImOpt } from "react-icons/im"
import EffectState from "./Components/EffectState"




 function App(){

  // let [color,setColor] = useState("White")

  return(
    <>
  {/* //   <div style={{background:color,height:'100vh',textAlign:'center'}}>
  //     <h1>{color}</h1>
  //     <button onClick={()=> setColor('red')}>RED</button>
  //     <button onClick={()=> setColor('green')}>green</button>
  //     <button onClick={()=> setColor('yellow')}>yellow</button>
  //     <button onClick={()=> setColor('blue')}>BLUE</button>
  //   </div> */}

    {/* <Counter /> */}

    {/* <Arr /> */}

    {/* <Togle/> */}




    <EffectState />





    </>
  )
     
 }





export default App
