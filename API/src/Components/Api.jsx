import React, { useEffect, useState } from 'react'
import axios from "axios"

const Api = () => {

    let [apidata,setApidata]=useState([])
    let [showfrm,setShowfrm]= useState(false)
    let [updatedata,setUpdatedata]= useState({})
    

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setApidata(res.data))
    },[Delete])

    function Delete(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then(()=>alert("Deleted...."))
        .catch((err)=>alert(err))

    }

    function handleupdate(e){
        const {name,value} = e.target
        setUpdatedata({...updatedata,[name]:value})
    }


    function finalupdate(e){
      e.preventDefault()
      axios.put(`http://localhost:3000/userdata/${updatedata.id}`,updatedata)
      .then(()=> {alert("updated....")
        setShowfrm(false);
      })

    }


  return (
   <>

   <h1>API Data</h1>

   <table border="2">
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Email</th>
        <th>City</th>
        <th>Update</th>
        <th>Delete</th>
    </tr>

    {
        apidata.map((e)=>(
            <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.contact}</td>
                <td>{e.email}</td>
                <td>{e.city}</td>
                <td style={{backgroundColor:'green'}}><button  onClick={()=>(setShowfrm(true),setUpdatedata(e))}>Update</button></td>
                <td style={{backgroundColor:'red'}}><button onClick={()=>Delete(e.id)}>Delete</button></td>
            </tr>
           
        ))
    }

   </table>
   

   <hr />


   {showfrm && <form action=""  onSubmit={finalupdate}>   <h1> this is old data please update</h1>

    <label>ID</label>
    <input type="text" name='id' value={updatedata.id}/> <br /><br />

    <label>Name</label>
    <input type="text" name='name' value={updatedata.name} onChange={handleupdate}/> <br /><br />

    <label>Email</label>
    <input type="text" name='email' value={updatedata.email} onChange={handleupdate}/> <br /><br />

    <label>City</label>
    <input type="text" name='city' value={updatedata.city} onChange={handleupdate}/> <br /><br />

    <label>Contact</label>
    <input type="text" name='contact'  value={updatedata.contact} onChange={handleupdate}/> <br /><br />


    <input type="submit" />


    </form>
    }

    
   
   </>
  )
}

export default Api
