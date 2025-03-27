import React, { useState } from "react"


function P(){
    let [namedata,setname]=useState()
    let[sch,setsch]= useState()

    function Namevalue(e){
        setname(e.target.value)
    }

    function Schvalue(e){
        setsch(e.target.value)
    }
    return(
        <>
        <h1> hello : {namedata}</h1>
        
        <h2>school  : {sch}</h2>

        <form action="">
            <label htmlFor="">name</label>
            <input type="text" onChange={Namevalue} /> <br />

            <label htmlFor="">school</label> 
            <input type="text" onChange={Schvalue} />
        </form>
        </>
    )
}

export default P



// onchange event = user time pr jo bhi value add ya remove krta h vo exact value ko get krna 
// value ko fun ke under get karenge 

// jese hi onchnage event fire hoga  to vah event object pass karenga is function ko Namevalue 
//value ko get krne ke liye = e.target.value