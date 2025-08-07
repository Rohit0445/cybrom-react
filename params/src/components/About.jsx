import React from 'react'
import { useParams } from 'react-router-dom'


const About = () => {

    let {id,name} = useParams()

  return (
    <>
    <h1>This is About Page</h1>

    <h1>Id = {id}</h1>
    <h1>Name = {name}</h1>

    
    </>
  )
}

export default About
