import React, { useState } from "react"

function Frm2(){
    let [frmdata,setfrmdata] = useState({
        username:"",age:"",contect:""
    })

    function Inputvalue(e){
        let {name,value}= e.target
        setfrmdata({...frmdata,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        console.log(frmdata)
    }
    return(
        <>
       <h1> multi_hello </h1>

       <form onSubmit={finalsubmit}>

        <label htmlFor="">multi_name</label> 
        <input type="text"  name="username" onChange={Inputvalue}/> <br />

        <label htmlFor="">multi_age</label> 
        <input type="text"  name="age" onChange={Inputvalue}/> <br />

        <label htmlFor="">multi_contect</label> 
        <input type="text"  name="contect" onChange={Inputvalue}/> <br />

        <input type="submit" />
       </form>
        </>
    )
}

export default Frm2