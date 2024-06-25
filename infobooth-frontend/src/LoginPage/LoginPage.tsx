import logo from "../assets/CM_logo_big.png";
import './loginpage.css';
function LoginPage() {
  return (
    <>
      <img className="login-logo" src={logo}></img>
      <form className="form-container">
        <input type="text" id="username" placeholder="Username"></input>
        <input type="password" id="password" placeholder="Password"></input>
        <button type="submit" className="btn-blue">Login</button>
      </form>
    </>
  )
}

export default LoginPage
