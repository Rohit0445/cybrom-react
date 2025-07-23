import Child1 from './components/Child1'
// import Child2 from './components/Child2'
import Child5 from './components/Child5'




// function App(){

//   let info = {
//     name:"Rohit",
//     age : 24,
//     city : "Bhopal"
//   }
//   return(
//     <>
//     <h1>Hell !</h1>
//     <Child1 userinfo={info}/>
//     <Child2 userinfo1={{...info}} />
    
    
//     </>
//   )
// }


// export default App




function App(){

  let fname = "Vikash"
  let fage = 24
  let fcity = "bhopal"
  return(
    <>
    <h1>Hell !</h1>
    <Child1 name = {fname} age = {fage} city = {fcity}/>
    <Child5 />


    {/* <Child2 userinfo1={{...info}} /> */}
    
    
    </>
  )
}


export default App