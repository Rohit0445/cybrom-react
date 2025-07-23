import { Link, Outlet } from "react-router-dom"




function Layout(){

    return(
        <>

        <nav className="bg-gray-800 text-white h-15 content-center ">
        
            <ul className="flex gap-10 pl-20">
                <li className=""><Link to="/">Home</Link></li>
                <li className=""><Link to="/about">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
        </nav>

        <Outlet /> 


        <footer>
            <h1>This is Footer Section</h1>
            <h1>This is Footer Section</h1>
            <h1>This is Footer Section</h1>
            <h1>This is Footer Section</h1>
            <h1>This is Footer Section</h1>
        </footer>
        
        
        </>
    )
}


export default Layout
