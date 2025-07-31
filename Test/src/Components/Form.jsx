import React, { useEffect } from 'react'

const Form = () => {

   let data = useEffect({})


    function  takeinput(){

    }

  return (
   <>

   <h1>This is Form</h1>


   <form action="">

    Name : <input type="text" value={{}} onChange={takeinput()}/> <br /><br />
    Email : <input type="email" /> <br /><br />
    Contact : <input type="number" /> <br /><br />

    <input type="submit" />

   </form>
   
   </>
  )
}

export default Form
