import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Sign(){

    let [frmdata, setfrmdata]= useState({
        name:"",email:"",password:""
    })

    function Inputhandle(e){
        const {name,value}= e.target
        setfrmdata({...frmdata,[name]:value})

    }
    let navigator= useNavigate()
    function finalsumbit(e){
        e.preventDefault()
        console.log(frmdata)
        localStorage.setItem('signdata',JSON.stringify(frmdata))
        navigator('/login')

    }
    return(
        <>

        <form action="" onClick={finalsumbit}>

            <label htmlFor="">Name</label> 
            <input type="text" name="name" onChange={Inputhandle} /> <br />

            <label htmlFor="">Email</label> 
            <input type="text" name="email" onChange={Inputhandle} /> <br />

            <label htmlFor="">Password</label> 
            <input type="text" name="password" onChange={Inputhandle} /> <br />

            <input type="submit" />

        </form>
        </>
    )
}

export default Sign