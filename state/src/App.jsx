import About from "./about"
import { use, useState } from "react"

function App(){
  let [variable,setName]= useState("Mishra")
  let [age,setAge]= useState("21")
  let [contect,setContect]= useState("123456")
  let[speed,setSpeed]=useState("30")
  let[mycolor,setColor]=useState("lightblue")

  let[color2,setColor2]=useState("blue")

  function demo(){
    setName("vipra")
  }

  function demo1(){
    setAge("22")
  }

  function demo3(){
    setContect("9669616885")
  }

  
   function hide(){
      
   }
  return(

    <>
    <h1>My Name is shashank {variable} </h1>

    <h2>My Age {age}</h2>

    <h2>My contect {contect}</h2>

    <h1>speed {speed}  </h1>

    <button onClick={demo}>Change</button>

    <button onClick={demo1}>change age</button>

    <button onClick={demo3}> change contect</button>

    <button onClick={ ()=>{setSpeed(90)}}>  (change speed_)arrow funtion change</button>

    <div style={ {height:"50px",backgroundColor:mycolor} }></div>

    <button onClick={  ()=>setColor("red")}> color change</button>

    <div style={{height:"60px",backgroundColor:color2} }></div>

    <button onClick={  ()=> setColor2("green")}>color2 </button>


   <About/>


   <h1 id="h1">happy birthday</h1>
   <button >hide</button>
   <button>show</button>
    </>
  )
}

export default App




// practice seation==========================================================================


// import { useState } from "react"
// function App(){
//   let [name,nameState]= useState("shashank")
//  let [cl,clState]=useState("10TH")
//  let[address,addState]= useState("shahpur")
//  let[age,ageState]=useState("00")
//  let[color1,colorState]=useState("yellow")
//  let[color22,color2Sstate]=useState("red")
//  let[color3,color3State]=useState("pink")

//   function Demo(){
//     nameState("PRANAV")
//   }

//  function d1(){
//   clState("12th")
//  }

//  function add(){
//   addState("pahawadi")
//  }

//  function color2(){
// color2Sstate("white")
//  }

//  function color33(){
// color3State("green")
//  }
//   return(
//     <>
//     <h1>My name is {name}</h1>

//     <h1>my class is {cl}</h1>

//     <h1>address {address}</h1>

//     <h1>age {age} </h1>

//     <button onClick={Demo}> change name</button>

//     <button onClick={d1}> chnage class</button>

//     <button onClick={add}> address</button>

//     <button onClick={()=>color1( colorState("orange") )}>change yellow color</button>

//     <button onClick={color2}> change red color</button>

//     <button onClick={color33}> color pink change</button>

//     <button onClick={()=>age(ageState("21"))}>change age</button>

//     <div style={{height:"100px",backgroundColor:color1}}></div>

//     <div style={{height:"100px",backgroundColor:color22}}>  <img src="ashoka.jpg" alt="" /></div>

//     <div style={{height:"100px",backgroundColor:color3}}></div>

//     </>
//   )
// }

// export default App