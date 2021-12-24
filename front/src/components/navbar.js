import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <nav className="navbar flexcenter" >
            
            <Link to="/"> Home </Link>
            <Link to="/sellers"> Sellers view </Link>
            <Link to="/register"> Registro  </Link>
        </nav>
    )
}

export default Navbar;
