import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <nav className="navbar " >
            
            <div>

            </div>
            <div className="link-container">
                <Link to="/"> Home </Link>
                <Link to="/register"> Registro  </Link>
                <Link to="/login"> Log in  </Link>
            </div>
        </nav>
    )
}

export default Navbar;
