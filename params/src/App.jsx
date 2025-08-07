import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import About from './components/About'
import Name from './components/Name'
import { Link } from 'react-router-dom'

const App = () => {


  return (
    <>
    <h1>Hello</h1> 

    <Link to='about/1/rohit'>user1</Link>
    <Link to='about/2/abhishek'>user2</Link> 
    <Link to='about/3/yashraj'>user3</Link>

    <Routes>
      <Route path='/about/:id/:name' element={<About/>}/>
      <Route path='/Contact/:c' element={<Contact/>}/>
      <Route path='/name/:n' element={<Name/>}/>
    </Routes>
    
    
    </>
  )
}

export default App
