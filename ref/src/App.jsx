import React, {  useRef } from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  
  function App(){
    // const notify = () => toast.success('successfull....');
    const notify = () => toast.success('successfull....');

    let myRef=useRef()

    function inpfocus(){
      myRef.current.focus()
      
    }


    function change(){
      myRef.current.innerHTML="Abhishek"
      myRef.current.style.backgroundColor="red"      
    }
    

    return(
      <>
      <div>
        
        <button onClick={notify}>Notify!</button>
        <ToastContainer position="top-center" autoClose='5000' theme="dark" />
      </div>

       <input type="text" ref={myRef}/>
      <button onClick={inpfocus}> Click Here</button>

      <h1 ref={myRef}>Rohit</h1>
      <button onClick ={change}>Change</button>
      </>
    );
  }

export default App