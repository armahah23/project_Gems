 import React, { useState } from 'react';
 import { FileText, ArrowUp, } from 'lucide-react';
 import './HomePage.css';
 import  Logo from '../assets/photos/logo.png'
 import  ImageA from '../assets/photos/A.png'
 import  ImageB from '../assets/photos/B.png'
 import  ImageC from '../assets/photos/C.png'
 import  ImageD from '../assets/photos/D.png'
 import  ImageE from '../assets/photos/E.png'
 import  ImageF from '../assets/photos/F.png'
 import  ImageG from '../assets/photos/G.png'
 import  ImageH from '../assets/photos/H.png'



 const HomePage = () => {
   const [formData, setFormData] = useState({
     name: '',
    number: '',
    message: ''
   });

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log('Form submitted:', formData);
   };

   return (
     <div className="home-page">
       {/* Header */}
       <header className="header">
         <div className="container">
           <img className='Logo' src={Logo} style={{ width: '150px', height: '150px' }} />
           <nav className="nav-menu">  
             <div className="nav-links">
              <a href="#">HOME</a>
              <a href="#">CONTACT</a>
              <a href="#">SERVICES</a>
               <a href="#">OFFERS</a>
               <a href="#">STORE</a>
               <button className="sign-up-btn">SIGN UP</button>
             </div>
           </nav>
        </div>
       </header>

       {/* Main Content */}
        <main>
         {/* Service Buttons */}
         <section className="service-actions container">
           
           <button className="action-btn book-btn">
             <FileText />
             BOOK NOW
           </button>
         </section>
         {/* Hero Section */}
         <section className="hero-section container">
           <div className="hero-content">
            <h1>
               <span>INNOVATIVE</span> VEHICLE
               <br />SERVICE <span>SOLUTIONS</span>
             </h1>
             <p>               REVOLUTIONIZING VEHICLE CARE: STREAMLINING
               <br />SERVICE CENTERS WITH AUTOMATED SOLUTIONS
             </p>
             <div className="hero-actions">
              <button className="sign-up-btn">SIGN UP</button>
               <p className="login-text"> or <a href="#">CLICK HERE</a> to Log in</p>
             </div>
           </div>
           <img className='ImageA' src={ImageA} style={{ width: '500px', height: 'Auto' }} />
        

         </section>

          {/* What We Do Section */}
          <section className="what-we-do container">
          <div className="mechanic-image">
           <img className='ImageB' src={ImageB} style={{ width: '400px', height: '400px' }} />
           </div>
            <div className="service-details">
              <h2>What we do?</h2>
              <p>
                Streamlining vehicle service operations with smart solutions for efficiency and ease.
              </p>
              <ul className="service-list">
                <li>🔧 Online Appointment Scheduling</li>
                <li>🔧 Automated Service Reminders</li>
                <li>🔧 Real-Time Service Tracking</li>
                <li>🔧 Digital Invoices & Payment</li>
                <li>🔧 Inventory & Parts Management</li>
                <li>🔧 Technician Assignment System</li>
              </ul>
              <h2>Contact Us →</h2>
            </div>
         </section>
         <div className="WheelSet">
           <img className='ImageC' src={ImageC} style={{ width: 'auto', height: '700px' }} />
           </div>



         {/* History Section */}
         <section className="history-section-container">
           <h2>History</h2>
           <p className="history-text">
             Established in 2010, our vehicle service center began as a small family-owned garage
            with a passion for quality and customer care. Over the years, we have grown into a
            trusted name in vehicle maintenance and repair through dedicated customer
            relationships. Our journey has always been driven by innovation, ensuring we offer the
            latest technology and services to keep vehicles running smoothly. Today, we continue
            to uphold our commitment to excellence, providing fast, reliable, and professional
             service for every vehicle that comes through our doors.
           </p>

           <div className="roles-grid">
             <div className="role-card">
             <div className="role-icon">
               <img className='ImageD' src={ImageD} style={{ width: 'Auto', height: 'Auto' }} />
              </div>
              <h3>ADMIN</h3>
               <p>An administrator in our vehicle service<br/> center manages team, schedules, and ensures<br/> quality service to meet customer needs.</p>
             </div>
             <div className="role-card"> 
               <img className='ImageE' src={ImageE} style={{ width: 'Auto', height: 'Auto' }} />
              <h3>CUSTOMER</h3>
              <p>A customer in our vehicle service center <br/>books services, gets repair status,<br/> and receives updates for a smooth experience.</p>
            </div>
            <div className="role-card">
              <img className='ImageF' src={ImageF} style={{ width: 'Auto', height: 'Auto' }} />
              <h3>MECHANIC</h3>
              <p>A mechanic in vehicle service center<br/> handles repairs, ensures quality repairs,<br/> and ensures timely completion of services.</p>
            </div>
          </div>
         </section>

         <div className="WheelSet-1">
           <img className='ImageH' src={ImageH} style={{ width: 'auto', height: '700px' }} />
          </div>

         {/* Need Help Section */}

         <section className="help-page">
          <div className="background-design"></div>
          <div className="help-content"> 
          {/* Left Section - Header and Text */}
         <div className="help-text">
          <h1>Need Help!</h1>
          <img className='ImageG' src={ImageG} style={{ width: '400px', height: '400px' }} />
          <p>
            We're here to provide expert assistance every step of the way. Whether you need<br/>
            guidance on services, help with scheduling, or any other support, our dedicated
            team<br/> is ready to ensure your experience is seamless and stress-free.
          </p> 
        </div>
        
        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-item">
            <p><strong>DANISH</strong></p>
            <p>071 1234567</p>
          </div>
          <div className="contact-item">
            <p><strong>NILESH</strong></p>
            <p>077 1234561</p>
          </div>
        </div>
        

        {/* Form Section */}
        <div className="help-form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Number" required />
            <textarea placeholder="How can I help you?" required></textarea>
            <button type="submit">SUBMIT →</button>
          </form>
        </div>
        </div>
     </section>

        <button  className="back-to-top"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <ArrowUp />
          </button>



       </main>

      
       
    </div>
   );
 };

 export default HomePage;

