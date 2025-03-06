import { useState } from "react"

function New(){
    let [st,stState]=useState(true) 
    let[ch,chState] =useState(1) 

    function decrement(){
        if(ch!=0){
            chState(ch-1)
        }
    }

    return(
          
        <>

        { st ? <h1> welcome </h1> : "" }

    

        

        <button onClick={()=>stState(true)}> show</button>
        
        <button onClick={()=>stState(false)}>hide</button>

        {/* <button onClick={()=>stState(!st)}> tongle</button> */}

        <button onClick={()=>stState(!st)}> 
            {  st ? "hide" : "show"}
        </button>


        <h1> {ch}</h1>

        <button onClick={()=>chState(ch+1)}>+</button>
        {/* <button onClick={()=>chState(ch-1)}>-</button> */}

        <button onClick={decrement}>-</button>



        



        </>
    )
}

export default New