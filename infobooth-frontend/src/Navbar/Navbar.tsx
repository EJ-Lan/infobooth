import logo from "../assets/CM_logo_small.png";
import './navbar.css';
function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="nav-logo-container">
                <a href="#" className="nav-logo"><img src={logo} alt="Logo" height="30"/></a>
            </div>

            <div className="nav-links-container">
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">Manage Screens</a>
                <a className="nav-link" href="#">Manage TVs</a>
                <button className="btn-blue">Logout</button>
            </div>
        </div>
        </>
    )
  }
export default Navbar