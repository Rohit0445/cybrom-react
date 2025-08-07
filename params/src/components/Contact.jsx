import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {

    let {c} = useParams()

  return (
   <>
   <h1>This is Contact Page</h1>

   <h1>Contact = {c}</h1>
   
   
   </>
  )
}

export default Contact
