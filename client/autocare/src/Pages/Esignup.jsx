import "./Esignup.css";
// import logo from '../assets/photos/logo.png';

export default function Esignup() {
  return (
    <div className="Esignup-container">
      <div className="logo">{/* <img src={logo} alt="AC_logo" /> */}</div>

      <form className="Esignup-form">
        <h1>
          Empolyee <span> Sign Up </span>{" "}
        </h1>
        <div className="main">
          <div className="column-1">
            <label htmlFor="fname">First Name</label>
            <input type="text" placeholder="Enter your first name" />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter your Email" />
            <label htmlFor="text">Phone number</label>
            <input type="text" placeholder="Enter your phone number" />
            <label htmlFor="Username">Username</label>
            <input type="text" placeholder="Enter your Username" />
            <label htmlFor="password">Conform Password</label>
            <input type="email" placeholder="Enter your Password" />
          </div>
          <div className="column-2">
            <label htmlFor="Lname">Last name</label>
            <input type="text" placeholder="Enter your Last name" />
            <label htmlFor="Idnumber">ID Number</label>
            <input type="text" placeholder="Enter your ID number" />
            <label htmlFor="Address">Address</label>
            <input type="text" placeholder="Enter your Address" />
            <label htmlFor="password">Password</label>
            <input type="email" placeholder="Enter your Password" />
          </div>
        </div>
        <button type="submit">
          <b>SIGN UP</b>
        </button>
        <p>
          Already have an Account? <a href="#">Login</a>
        </p>
      </form>
    </div>
  );
}
