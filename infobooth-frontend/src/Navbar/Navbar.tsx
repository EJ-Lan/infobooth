import logo from "../assets/CM_logo_small.png";
import './navbar.css';
function Navbar() {
    return (
        <>
        <div className="navbar">
            <div className="nav-logo-container">
                <a href="#"><img className="nav-logo" src={logo} alt="Logo" height="30"/></a>
            </div>

            <div className="nav-links-container">
                <a className="nav-link nav-item" href="#">Home</a>
                <a className="nav-link nav-item" href="#">Manage Screens</a>
                <a className="nav-link nav-item" href="#">Manage TVs</a>
                <button className="nav-btn btn-blue nav-item">Logout</button>
            </div>
        </div>
        </>
    )
  }
export default Navbar