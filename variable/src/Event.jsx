
const Event = ()=>{
    function fun(){
        alert("working")
    }

    let Demo = () =>{
        
        alert("on mouse leaver is worked")
    }
return(
    <>
    <button onClick={fun}>Click</button>
    <button onMouseEnter={fun}> On mouse enter</button>
    <button onMouseLeave={Demo}> on mouse leaver</button>
    </>
)
}

export default Event