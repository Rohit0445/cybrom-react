import React, { useContext } from 'react'
import { store } from '../App'

const Seting = () => {
    let data = useContext(store)
  return (
   <>

   <h1>{data.email}</h1>
   <h1>{data.pass}</h1>
   
   </>
  )
}

export default Seting
