import React from 'react'
import Form from './components/Form'
import Multiform from './components/Multiform'
import LocalForm from './components/LocalForm'
import { Route, Routes } from 'react-router-dom'
import Showdata from './components/Showdata'

const App = () => {
  return (
  <>
  
  {/* <Form/> */}
  {/* <Multiform/> */}

  {/* <LocalForm /> */}

  <Routes>

    <Route index element={<LocalForm/>}/>
    <Route path='/showdata' element={<Showdata/>}/>
  </Routes>
  
  </>
  )
}

export default App
