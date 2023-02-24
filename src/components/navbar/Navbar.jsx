import "./navbar.css"
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to='/'>
          <span className="logo">surajBooking.com</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton"><Link to="/login">Login</Link> </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar