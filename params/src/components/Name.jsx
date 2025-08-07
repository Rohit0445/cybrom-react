import React from 'react'

import { useParams } from 'react-router-dom'

const Name = () => {


    let {n} = useParams()

  return (
   <>
      <h1>This is Name page  </h1>
      <h1>Name = {n}</h1>

      
   
   </>
  )
}

export default Name
