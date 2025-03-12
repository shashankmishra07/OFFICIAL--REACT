import { Link, Outlet } from "react-router-dom" 
// outlet is already imported  


function Navbar() {
    return (
        <>



            <nav>
                <h1>Logo</h1>
                <ul>
                    <li> <Link to ="/">Home</Link></li>
                    <li> <Link to ="/about">About</Link> </li>
                
                    <li> <Link to="/contect"> Contect </Link> </li>
                    <li> <Link to="/Services"> Services</Link> </li>
                    
                    
                </ul>
            </nav>

            <Outlet/>

            <footer>
                <h1>Footer</h1>
                <h5>footer all pages show honga</h5>
            </footer>

        </>

    )
}

export default Navbar

// import { Link } from "react-router-dom"    link ko import kiya react-router-dom se
/* <Link> </Link>       me to ke under url pass krte h */ 

// app.jsx me sabse pahle home page hi open rhe so TO me url ko hata diya or vaha / likh diya
//outlet childern ko render krwata h