import './nav-style.css'
import AC_logo from '../assets/Imgaes/AC_logo.png'

function Navbar() {
  return (
    <div className="navbar-container">
        <div className="logo">
            <img src={AC_logo} alt="logo" />
        </div>
        <div className="menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar