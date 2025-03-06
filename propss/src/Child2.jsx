import Child3 from "./Child3"
function Child2(props){
    return(
        <>
        <h1> Child 1 ka data ={props.name} </h1>
        <Child3 name="satyam"/>
        </>
    )
}

export default Child2