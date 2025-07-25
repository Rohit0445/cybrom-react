import React, { createContext } from 'react'
import Child1 from './Component/Child1'
import Dashboard from './Component/Dashboard'
import Seting from './Component/Seting'


let store = createContext()
 
let name = "From App Page"

let user = {name:"rohit",age:24,email:'meena@gmail.com',pass:'Rohit@123'}
  

const App = () => {

 

  return (
    <>
    <store.Provider value={user} >

      {/* <Child1/> */}
      <Dashboard/>
      <Seting/>
      
    </store.Provider>
    
    
    </>
  )
}

export default App

export {store}
