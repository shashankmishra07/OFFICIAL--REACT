import { Route,Routes } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Navbar from "../Navbar"
import Contect from "./Contect"
import Services from "./Services"

function App(){
    return(
        <>
        <Navbar />

        <Routes>
            <Route index element={ <Home /> }/>  
            <Route path="/about"  element={ <About/> }/> 
            <Route path="/services"  element={ <Services/>  }/>
            <Route path="/contect"  element={ <Contect/> } />
               
        </Routes>



        </>
    )
}

export default App


// element ke under =function name   yaha function call
// element ke under =function name

//path me koi bhi name rakh skte h / use krke , path se hi url create ho raha h