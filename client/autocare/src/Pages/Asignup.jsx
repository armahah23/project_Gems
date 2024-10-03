import './Asignup.css';

export default function Asignup() {
  return (
    <div className="Asignup-container">
        <div className="logo"></div>

        <form className="Asignup-form">
            <h1>Admin <span>Sign Up </span> </h1>
            <div className="main">
              <div className="column-1">
                <label htmlFor="fullname">Full Name</label>
                    <input type="text" placeholder="Enter your Full name" /> 
                    <label htmlFor="email">Email</label>   
                    <input type="text" placeholder="Enter your Email" />
                    <label htmlFor="password">Password</label> 
                    <input type="email" placeholder="Enter your Password" />
              </div>
              <div className="column-2">
                <label htmlFor="Username">Username</label> 
                    <input type="text" placeholder="Enter your Username" /> 
                    <label htmlFor="number">Phone Number</label>   
                    <input type="text" placeholder="Enter your Phone number" />
                    <label htmlFor="password">Conform Password</label> 
                    <input type="email" placeholder="Enter your Password" />
              </div>

            

            </div>
        
        
        <button type="submit"><b>SIGN UP</b></button>
        <p>Already have an Account? <a href="#">Login</a></p>
      </form>
      
    </div>
  )
}
