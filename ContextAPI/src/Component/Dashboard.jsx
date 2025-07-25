import React, { useContext } from 'react'

import { store } from '../App'

const Dashboard = () => {
    let data = useContext(store)
  return (
   
    <>
    <h1></h1>

    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    
    
    </>
      
  )
}

export default Dashboard
