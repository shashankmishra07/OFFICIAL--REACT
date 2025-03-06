import { useState } from "react"

function About(){
let [ob,obState]=useState({        // state ke under object bhi use kr skte h
    name:"shashank", age:"21"
})

let [arr,arrState]= useState([    // state ke under Arrray bhi use kr skte h
    "ARYAN",1234,'A',"satyam"
])

function object (){
    obState({name:"himanshu", age:19})   // object ki value ko change kiya
}

function array(){
    arrState([arr[0]="AMAN",arr[1]="0000",arr[2]="B",arr[3]="Anmol"])
}
    return(
        
        <>
        
        <h1>About object value = {ob.name} {ob.age}</h1>

        <h1 style={{textAlign:"center"}}>  About  array value= {arr[0]}  {arr[1]}  {arr[2]}  {arr[3]}</h1>

        <button onClick={object}>object change value</button>

        <button onClick={array}>  array value change</button>
        </>
    )
}

export default About


// state ke under object bhi use kr skte h
// state ke under array bhi use kr skte h