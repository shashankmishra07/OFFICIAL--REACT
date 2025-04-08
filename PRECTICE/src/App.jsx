import { Route, Routes } from "react-router-dom"
import About from "./about"
import Home from "./home"
import Sign from "./sign"

function App() {
  return (
    <>
    <h1> rvrv</h1>
      <Routes>
       <Route path="/" element="{<Layout/>}">
       <Route  index element="{<Home/>}"/>
       <Route path="about/>" element="{<About/>}" />
       <Route path="sign/>" element="{<Sign/>}" />

       </Route>
      </Routes>


    </>
  )
}

export default App