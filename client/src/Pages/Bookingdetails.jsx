import { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      vehiclemake: form.vehicleMake,
      vehicletype: form.vehicleModel,
      vehiclenumber: form.vehicleNumber,
      manufecturedyear: form.manufacturedYear,
      preferreddate: form.preferredDate,
      preferredtime: form.preferredTime,
      vehicleownername: form.ownerName,
      mobilenumber: form.mobileNumber,
      address: form.address,
      email: form.email,
      message: form.message
    };

    try {
      const response = await fetch('http://localhost:3000/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking');
      }

      const data = await response.json();
      alert('Booking created successfully');
      console.log('Booking created:', data);

      // Fetch user details after booking is created
      await fetchUserDetails(form.email);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create booking');
    }
  };

  const fetchUserDetails = async (identifier) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${identifier}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }

      const data = await response.json();
      console.log('User details:', data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to fetch user details');
    }
  };

  return (
    <main className='booking'>
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
                placeholder="Enter your message here"
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
