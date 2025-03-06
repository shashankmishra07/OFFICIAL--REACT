
import Event from "./Event"
function App(){
  // let name= prompt("Enter your name")
  let name= "shashank"
  
  let emp={
    emp_name:"hiresh",
    emp_age:23,
    emp_id: "01"
  }

  let arr=[ "satyam", "anmol", "harsh", 1231, "array"]

  return(
    <>
    <h1> welcpme to from variable name is = {name}</h1>
    <h1>Employe data from object  name is {emp.emp_name}</h1>
    <h2>Employe data from object age is {emp.emp_age}</h2>
    <h4> 0 index array value = {arr[0]}</h4>
    <h4>1 index array value = {arr[1]}</h4>
    <h4>3 index array value = {arr[3]}</h4>
    <Event/>
    
    </>
  )
}

export default App


// function ko as an tag call akrege  <Event/>