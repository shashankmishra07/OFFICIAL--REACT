import is from './vite.svg'
import Myimg from './img.jpg'

// import About from './About.jsx'
import {About as Ab,About2 as Ab2} from './About.jsx'  //named import for multiple import , nameed import me ham component ka name bhi chenge kr skte h with the help of= as

import {Contect as Co,Contect2 as Co2}   from './contect.jsx'   //named import for multiple import , nameed import me ham component ka name bhi chenge kr skte h with the help of= as
import Gallery from './Gallery.jsx'    //default import for single import
import Service from './service.jsx'    //default import for single import


//App.css ko import krenge
//class ke place pr classname 
import './App.css'

function App() {

let name="shashank"
let age=21

let st ={
  color:"green",
  backgroundColor:"black",
padding:"10px"
}
  return (

   <>

   <nav>
<ul><img src={is} alt="" /></ul>
    <ul>home</ul>
    <ul>about</ul>
    <ul>service</ul>
    <ul>kjwevk</ul>
    <ul>mglrm</ul>
    <ul>home</ul>
    <ul>about</ul>
    <ul>service</ul>
    <ul>kjwevk</ul>
    <ul>mglrm</ul>
   </nav>
   <h1 style={{color:"red", backgroundColor:"yellow"}}> My name is {name}</h1>
   <h1 style={{margin:"40px",color:"pink"}}>my age is {age} inline css</h1>
  <img src={Myimg} alt="" />

  <h2 style={st}> internal css</h2>

  <h1 className='external'>External css  applied <p> //App.css ko import krenge ,//class ke place pr classname  </p> </h1>

{/* about file ke component render */}

   <Ab/> 
   <Ab2/>
   <Service/>
   <Co/>
   <Co2/>
   <Gallery/>
   </>


  )
}

export default App


// /* <h1>div ki help se multiple elements ko return krwa skte hai JSX mai</h1>? */ no us?es

//fragment <> </> ki help se multiple element ko return krwate h
//src ke under ki image ko import karne ki need h=== import Myimg from './img.jpg'
//Myimg as an variable 
//logical part always return ke upar hi likhna h== let name="shashank"
//jsx me variable hamsesha {} ke underhi aayega == <h1> My name is {name}</h1>


//  inline  css property {} ke under hi likhnge =style={{}}
// ex style={{color:"red", backgroundColor:"yellow"}}

//internal css as an object use kr skate h key frame me  css property {} ke under hi likhnge =style={{}}
//