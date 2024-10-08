import React from 'react';
import './EBService.css'; // Add necessary CSS styles here
import  ImageT from '../assets/photos/T.png'

function App() {
  return (
    <div className="EBService">
      
      <main>
        {/* Slot Booking Section */} 
        <section className="slot-booking-section">
          <h1>Book Your Service Slot in Seconds!</h1>
          <p>
            Skip the wait and secure your spot with our easy online slot booking. 
            Choose your preferred<br/> time, and let us take care of your vehicle-quick, hassle-free, and at your convenience.
          </p>
          
            <button className="book-service-button">Book Service</button>
        </section>
        <img className='ImageT' src={ImageT} style={{ width: '450px', height: '300px' }} />

        {/* Emergency Section */}
        
        <section className="emergency-section">
        <button className="emergency-service-button">Emergency Service</button>
        
          <h1>Help When You Need It Most !</h1>
          <p>
            Car trouble? We’re just a call away! Whether it’s a flat tire, engine failure, or you’re out of<br/> gas, 
            our team is available 24/7 to help you on the spot. Quick, reliable, and always ready!
          </p>
         
        </section>
      </main>
      <div className="background-design"></div>
    </div>
  );
}

export default App;
