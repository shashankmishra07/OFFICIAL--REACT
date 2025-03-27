import React, { useState } from "react"

import P from "./P"
import Frm2 from "./frm2"
import Functional_com from "./Functional_com"

function App(){
  let[frmdata,setfrmdata]=useState()
  let[cls,setclass]=useState()
  let[email,setemail]=useState()


  function Inputvalue(e){
    console.log(e.target.value)
    setfrmdata(e.target.value)
  }

  function Classvalue(f){
    setclass(f.target.value)
  }

  function Emailvalue(e){
    setemail(e.target.value)
    
  }
  return(
    <>
    <h1>Hello  : {frmdata}</h1>

    <h2>class :{cls}</h2>
    <h2>EMail : {email}</h2>

    <form action="">
      <label htmlFor="">name</label>
      <input type="text" onChange={Inputvalue} /> <br />

      <label htmlFor="">class</label>
      <input type="text" onChange={Classvalue} /> <br />

      <label htmlFor="">Email</label>
      <input type="text" onChange={Emailvalue} />
    </form>



    <br />

    <P/>

    <br />

      <Frm2/>

      <h1>functional data</h1>
      <Functional_com/>
    </>
  )
}

export default App



// onchange event = user time pr jo bhi value add ya remove krta h vo exact value ko get krna 
// value ko fun ke under get karenge 

// jese hi onchnage event fire hoga  to vah event object pass karenga is function ko  Inputvalue 
//value ko get krne ke liye = e.target.value

//usestate ki help se variale ki value ko change kr rhe h