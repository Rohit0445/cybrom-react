import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Layout from './Components/Layout'
import Services from './Components/Services'

const App = () => {
  return (
    <>
    {/* <h1>This is Landing page </h1> */}
    {/* <Routes>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>}/>


    </Routes> */}


    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
      </Route>
    </Routes>


   
   </>
  )
}

export default App
