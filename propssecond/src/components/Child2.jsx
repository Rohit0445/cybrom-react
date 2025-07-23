// function Child2({userinfo1}){
//     return(
//         <>
//         <h1>This is Child 2</h1>
//         <h1>{userinfo1.name}</h1>
        
        
//         </>
//     )
// }


// export default Child2

// import { ImOpt } from "react-icons/im";
// import { SlBasket } from "react-icons/sl";
import Child3 from "./Child3"
import Child4 from "./Child4"



function Child2({name,age,city}){
    return(
        <>
        <h1>This is Child 2 {name}</h1>
        {/* // <SlBasket style={{color:"red" }}/> */}
        <Child3 name = {name} />
        <Child4 age= {age} city = {city}/>
        
        
        
        </>
    )
}


export default Child2