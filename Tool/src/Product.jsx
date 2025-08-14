import React from 'react'
import my1 from './assets/react.svg'

const Product = () => {
    let productlist = [
        {id:1,pname:"watch",pprice:2000,pimg:my1},
        {id:1,pname:"laptop",pprice:50000,pimg:my1},
        {id:1,pname:"mobile",pprice:2300,pimg:my1},
        
    ]
  return (
    <>
    <div >
        <div style={{display:"flex",justifyContent:""}}>
            {
                productlist.map((e)=>(
                    <div style={{border:"1px solid black ",padding:"16px",margin:"20px"}}>
                    <img src={e.pimg} alt="" />
                    <h1>Name={e.pname}</h1>
                    <h1>Price={e.pprice}</h1><br />
                    <button>ADD To Cart</button><br />
                    </div>
                ))
            }
        </div>
    </div>
      
    </>
  )
}

export default Product
