import React, { useState } from 'react';
import './Bookingdetails.css';

function Bookingdetails() {
  const [form, setForm] = useState({
    vehicleMake: '',
    vehicleModel: '',
    vehicleNumber: '',
    manufacturedYear: '',
    preferredDate: '',
    preferredTime: '',
    ownerName: '',
    mobileNumber: '',
    address: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(form);
  };

  return(
    <main>
    <div className="background-design"></div>
    <div className="app">
      <h1>BOOKING DETAILS</h1>
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Vehicle Make</label>
          <input
            type="text"
            name="vehicleMake"
            placeholder="Ex: Hybrid"
            value={form.vehicleMake}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vehicle Owner Name</label>
          <input
            type="text"
            name="ownerName"
            placeholder="Ex: Mr. Perera"
            value={form.ownerName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vehicle Model</label>
          <input
            type="text"
            name="vehicleModel"
            placeholder="Ex: Vezel"
            value={form.vehicleModel}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Ex: 078-7587700"
            value={form.mobileNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Vehicle Number</label>
          <input
            type="text"
            name="vehicleNumber"
            placeholder="Ex: CAB - 1234"
            value={form.vehicleNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Ex: 84/8, Colombo 10."
            value={form.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Manufactured Year</label>
          <input
            type="text"
            name="manufacturedYear"
            placeholder="Ex: 2040"
            value={form.manufacturedYear}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ex: abcdefgh@gmail.com"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={form.preferredDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Preferred Time</label>
          <input
            type="time"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn">Book Now</button>
      </form>
      </div>
    </div>
    
    </main>

  );
}

export default Bookingdetails;
