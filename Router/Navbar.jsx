import { Link } from "react-router-dom"


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

        </>

    )
}

export default Navbar
