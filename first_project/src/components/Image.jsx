import '../App.css'

import myimage from '../assets/react.svg'


function Image(){
    return(
    <>
    
    <img src="vite.svg" alt="" /> <br /><br />
    <img src="Iimage.jpg" alt=""  className="image"/><br /><br />
    <img src={myimage} alt="" />
    
    </>
    )
}


export default Image