import React, { useState } from "react"

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
    </>
  )
}

export default App