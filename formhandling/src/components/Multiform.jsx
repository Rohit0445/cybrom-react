import React, { useState } from 'react'

const Multiform = () => {

   let [frmdata,setFrmdata] = useState({
    name:"" , age:""
   })

   function handleinput(e){
    const {name,value} = e.target
    setFrmdata({...frmdata,[name]:value})

   }


   function finalsubmit(event){
    event.preventDefault()
    console.log(frmdata)
    
   }


  return (
    <>
    <h1>Multiform</h1>


    <form action="" onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name='name' onChange={handleinput} /><br /><br />

        <label htmlFor="">Age</label>
        <input type="number" name='age' onChange={handleinput} /> <br /><br />

        <input type="submit" />


        <h1>{frmdata.name} </h1>

        <h1>{frmdata.age}</h1>
       
      </form>
    
    </>
  )
}

export default Multiform
                                                                                                             

























