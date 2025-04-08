import React, { useEffect, useState } from "react"

function Functional_com(){

    let [fdata,setfdata]= useState({
        username:"",age:"",address:"",city:"",password:""
    })
    let [userdataa,setUserdata] = useState({})
    // console.log(userdataa);
    

    function Inputvaluefrm(e){
        let{name,value}= e.target
        setfdata({...fdata,[name]:value})
    }

    function Finalsub(e){
       e.preventDefault()
       console.log(fdata)
       localStorage.setItem("userdata",JSON.stringify(fdata))
    }

  

    useEffect( ()=>{
        let localdata= JSON.parse(localStorage.getItem('userdata'))
        setUserdata(localdata)
    },[])
    return(
        <>
        <h1>functional com.. data</h1>
        
        <form onSubmit={Finalsub}>

            <label htmlFor="">Name</label>
            <input type="text"  name="username" onChange={Inputvaluefrm}/> <br />
            <label htmlFor="">age</label>
            <input type="text"  name="age" onChange={Inputvaluefrm}/>  <br />
            <label htmlFor="">address</label>
            <input type="text" name="address" onChange={Inputvaluefrm} /> <br />
            <label htmlFor="">city</label>
            <input type="text"  name="city"  onChange={Inputvaluefrm}/> <br />
            <label htmlFor="">password</label>
            <input type="text" name="password" onChange={Inputvaluefrm}/> <br />

            <input type="submit" />


            <h1>localStorage se data get kr ke ui pr show kr rhe h</h1>
            <br />
            <h1>{userdataa.username}</h1>
            <h1>{userdataa.age}</h1>
            <h1>{userdataa.city}</h1>
            <h1>{userdataa.address}</h1>

            
            
        
            
          





        </form>
        </>
    )
}

export default Functional_com
