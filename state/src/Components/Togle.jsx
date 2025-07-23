import { useState } from "react"

import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Togle(){
      
    // let [a,setA] = useState(false)
     
    return(
        <>
        {/* {a ? "" : <h1 className="text-4xl ">Hide Me </h1>}

        <br /><br />


        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>Togle</button> <br /><br />
        <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>{a ? "Show":"Hide"}</button>
        */}
          

          <div className="height:100vh "  id="maindiv">

            <div>

              <h1 className="text-4xl">COMING APRIL 2023</h1>
            <p>My travell blog is almost ready .Be one of the first to experience it by <br />
            entering email bolw .I'll notify you as soon as it's live . lets do this !</p><br /><br />

            <input type="email" placeholder="Enter your email" className="border rounded-2xl w-96 h-10 "/><br /><br />

            <input type="email" placeholder="Insta id" className="border rounded-2xl w-60 h-10"/> <input type="submit" className="border rounded-2xl w-36 h-10" />
            
               <div className="flex m-5"><FaTwitter />
               <FaFacebookSquare /></div>

            </div>

            

            
        

          </div>

        </>
    )
}

export default Togle