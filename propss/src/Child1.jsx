import Child2 from "./Child2"

function Child1(props){
    let {name}= props
    return(

        <>
        <h1>My name is {props.name}</h1>
        <Child2  name="Pranav"/>

        <h2>this is child1{props.fname} </h2>

        </>
    )
}

export default Child1