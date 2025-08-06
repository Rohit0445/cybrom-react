import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    let [frmdata,setFrmdata] = useState({
      name:"",contact:"",city:"",email:""
    })

    let nav = useNavigate()

    function handleinput(e){
      const {name,value} = e.target
      setFrmdata({...frmdata,[name]:value})
    }

    function finalsubmit(e){
      e.preventDefault()
      axios.post('http://localhost:3000/userdata',frmdata)
      .then(()=>("inserted...."))
      .catch((err)=>alert(err))

      nav('./apidata')
    }
  return (
    <>
    <form action="" onSubmit={finalsubmit}>

    <label>Name</label>
    <input type="text" name='name'onChange={handleinput} /> <br /><br />

    <label>Email</label>
    <input type="text" name='email' onChange={handleinput} /> <br /><br />

    <label>City</label>
    <input type="text" name='city' onChange={handleinput} /> <br /><br />

    <label>Contact</label>
    <input type="text" name='contact' onChange={handleinput} /> <br /><br />


    <input type="submit" />


    </form>
    
    </>
  )
}

export default Form
