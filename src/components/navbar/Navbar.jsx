import "./navbar.css"
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const {user,dispatch} = useContext(AuthContext);
  const handleLogout = (e) =>{
      e.preventDefault();
      console.log("logout")
      dispatch({type : "LOGOUT"})
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/'>
          <span className="logo">surajBooking.com</span>
        </Link>
       { user ? <div> {user.username}  <button className="navButton" onClick={handleLogout}>Logout</button></div> : <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton"><Link to="/login">Login</Link> </button>
        </div>}
      </div>
    </div>
  )
}

export default Navbar