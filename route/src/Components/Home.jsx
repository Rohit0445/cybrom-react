import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
    <h1>This is Home Page</h1>


    <ul>
      <li><Link to="/about">About</Link></li>
    </ul>
       
    </>
  )
}

export default Home
