import React from 'react'
import { Route, Routes ,Link } from 'react-router-dom'
import State from './Components/State'
import Color from './Components/Color'
import Form from './Components/Form'

const App = () => {
  return (
   <>

     <nav>

    <Link to={"/state"}>State</Link> 
    <Link to={"/form"}>Form</Link>  
    <Link to={"/color"}>Color</Link> 

  
   </nav>


   
    <Routes>
        <Route path='/' index element={<State/>}></Route>
         
        <Route path='/state'  element={<State/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/color' element={<Color/>}></Route>
    </Routes>


   

 
   
   
   </>
  )
}

export default App
