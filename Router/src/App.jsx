import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Navbar from "../Navbar"
import Contect from "./Contect"
import Services from "./Services"

function App() {
    return (
        <>
            {/* <Navbar />   yaha ise call nahi karege this is 1 way */}

            <Routes>
                <Route path="/" element={ <Navbar/> }>        
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contect" element={<Contect />} />
                </Route>
            </Routes>



        </>
    )
}

export default App


// element ke under =function name   yaha function call
// element ke under =function name

//path me koi bhi name rakh skte h / use krke , path se hi url create ho raha h

// <Route index element={ <Home /> }/>
// app.jsx me sabse pahle home page hi open rhe so path me url ko hata diya or vaha index likh diya


{/* <Route path="/" element={ <Navbar/> }>     call krne ka 2nd way     */}
