import React from "react"
import { useNavigate } from "react-router-dom"
function About(){
    const navi= useNavigate()
    function go(){
        navi('/sign')
    }
    return(
        <>
        <h1>This is a About Page</h1>
        <button onClick={go}>sign up</button>
        </>
    )
}
export default About