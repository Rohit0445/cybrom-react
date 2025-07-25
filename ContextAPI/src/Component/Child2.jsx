import React, { useContext } from 'react'
import { store } from '../App'





const Child2 = () => {
    let name = useContext(store)
  return (
    <>
    <h1>This is Child 2 {name}</h1>
    {/* <store.Consumer>
        {
            (data)=><h1> {data}</h1>
        }
    </store.Consumer> */}
    
    
    </>
  )
}

export default Child2
