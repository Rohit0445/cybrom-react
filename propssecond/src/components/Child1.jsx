// function Child1(props){
//     return(
//         <>
//         <h1>This is Child 1</h1>
//         <h1>{props.userinfo.name}</h1>
//         <h1>{props.userinfo.age}</h1>
//         <h1>{props.userinfo.city}</h1>
//         </>
//     )
// }

// export default Child1


import Child2 from './Child2'



// function Child1({userinfo}){
//     return(
//         <>
//         <h1>This is Child 1</h1>
//         <h1>{userinfo.name}</h1>
//         <h1>{userinfo.age}</h1>
//         <h1>{userinfo.city}</h1> 

       

        
//         </>
//     )
// }


  
function Child1({name,age,city}){
    return(
        <>
        <h1>This is Child 1 {name}</h1>
        <Child2 name = {name} age= {age} city = {city}/>
      

       

        
        </>
    )
}



export default Child1

