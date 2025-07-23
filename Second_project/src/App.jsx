import Child1 from "./Components/Child1";
import { Child2 } from "./Components/Child2";

function App(){
  return(
    <>
    <h1>Welcome to React js </h1>
    <Child1 name="Rohit" age={24} city="Vidisha" />
    <Child2 contact={7999932294}  email="meenarohit@gmail.com" />
    
    
    </>
  )
}

export default App