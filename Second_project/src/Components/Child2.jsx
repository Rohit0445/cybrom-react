export function Child2(props){
    let {contact,email}=props
    return(
        <>
          <h1 style={{backgroundColor:"red"}}>This is Child 2</h1>

          <h1>My Contact - {contact}</h1>
          <h1>My email - {email}</h1>
        </>
    )
}

 