import React from 'react'
import Api from './Components/Api'
import { Routes,Route } from 'react-router-dom'
import Form from './Components/Form'

const App = () => {
  return (
    <>
    <Routes>
      <Route index element={<Form /> }/>
      <Route path="/apidata" element={<Api /> }/>
    </Routes>
    
    </>
  )
}

export default App
