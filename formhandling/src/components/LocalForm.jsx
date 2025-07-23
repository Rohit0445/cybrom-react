import React from 'react'
import { useState } from 'react'

const LocalForm = () => {

    let [frmdata,setFrmdata] = useState({
        username:"" , email:"" , password:""
       })

    function takeinput(e){
    const {name,value} = e.target
    setFrmdata({...frmdata,[name]:value})
    }

    function handlesubmit(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
    }



  return (
    <>

    <h1>Sign Up Form </h1>


    <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">UserName</label>
        <input type="text" name='username' onChange={takeinput} /><br /><br />

        <label htmlFor="">Email</label>
        <input type="email" name='email' onChange={takeinput} /> <br /><br />

        <label htmlFor="">Password</label>
        <input type="passowd" name='password' onChange={takeinput} /> <br /><br />

        <input type="submit" />
       
      </form>
    
    </>
  )
}

export default LocalForm
