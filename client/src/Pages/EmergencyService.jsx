import React from 'react';
import './EmergencyService.css';
// import mapImage from './assets/map.png';


function EmergencyService() {
  return (
    
    <div className="emergency">
      
        <h1>Emergency Service</h1>
      <div className="container">
        <div className="form-container">
          <form>
            <label>
              Customer Location
              <div><input className='emergency_input' type="text" name="location" /></div>
            </label>
            <label>
              Vehicle Number
              <div><input className='emergency_input' type="text" name="vehicleNumber" /></div>
            </label>
            <label>
              Vehicle Type
              <div><input className='emergency_input' type="text" name="vehicleType" /></div>
            </label>
            <label>
              What happened to vehicle?
              <div><input className='emergency_input' type="text" name="distance" /></div>
            </label>
            <button type="submit">Continue</button>
          </form>
        </div>
        {/* <div className="map-container">
          <img src={mapImage} alt="Map" />
        </div> */}
      </div>
      <div className="background-design"></div>
    </div>
  );
}

export default EmergencyService;
