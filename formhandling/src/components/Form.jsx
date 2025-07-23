import React, { useState } from "react";

const Form = () => {
  let [value, setValue] = useState("");
  let [age, setAge] = useState("");
  let [number, setNumber] = useState("");
  let [email, setEmail] = useState("");
  let [city, setCity] = useState("");

  function handleinput(e) {
    console.log(e.target.value);
    setValue(e.target.value);
    
  }

  return (
    <>
      <h1>this is Form page </h1>

      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={handleinput} /><br /><br />

        <label htmlFor="">Age</label>
        <input type="number" onChange={(e)=>setAge(e.target.value)} /> <br /><br />

        <label htmlFor="">Number</label>
        <input type="number " onChange={(e)=>setNumber(e.target.value)} /><br /><br />
        
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)} /><br /><br />

        <label htmlFor="">City</label>
        <input type="text" onChange={(e)=>setCity(e.target.value)} /><br /><br />

        <h1>{value} </h1>

        <h1>{age}</h1>
        <h1>{email}</h1>
        <h1>{number}</h1>
        <h1>{city}</h1>
      </form>
    </>
  );
};

export default Form;
