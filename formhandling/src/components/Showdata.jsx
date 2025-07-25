import React from 'react'

const Showdata = () => {

    let show = JSON.parse(localStorage.getItem('userdata'))

    function Delete(){
        localStorage.clear()
    }
  return (
   <>

   <h1>Hello......</h1>

   <h1>username - {show.username}</h1>
   <h1>Email - {show.email}</h1>
   <h1>Password - {show.password}</h1>

    <button onClick={Delete()} >Delete</button>
   
   
   </>
  )
}

export default Showdata
