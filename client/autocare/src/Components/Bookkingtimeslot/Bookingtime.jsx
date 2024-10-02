import { useState } from "react";
import "./App.css";
import facebookIcon from "./assets/computer-icons-social-media-youtube-facebook-messenger-social-media-40769811ee1c159535e4d4e4fdb768e6.png";
import instagramIcon from "./assets/computer-icons-logo-clip-art-instagram-8b82bdef3e00ee4af2b8b268fdc93ed0.png";
import emailIcon from "./assets/email-logo-icon-email-png-dd3fc13c3c3d6e6d110176ae0d6aa42a.png";
import phoneIcon from "./assets/telephone-call-computer-icons-iphone-symbol-telefono-656b7d40e24d72890e33727daf924305.png";

function App() {
  const [form, setForm] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleNumber: "",
    manufacturedYear: "",
    preferredDate: "",
    preferredTime: "",
    ownerName: "",
    mobileNumber: "",
    address: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <form method="post">
      <div className="app">
        <h1>TUNE UP TIME</h1>
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
            <button type="submit" className="btn">
              Book Now
            </button>
          </form>
        </div>
        <footer>
          <div className="footer-content">
            <div>
              <img src={facebookIcon} alt="Facebook" />
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div>
              <img src={instagramIcon} alt="Instagram" />
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>
            <div>
              <img src={emailIcon} alt="Email" />
              <a href="mailto:autocare@info.com">autocare@info.com</a>
            </div>
            <div>
              <img src={phoneIcon} alt="Phone" />
              <a href="tel:+94771234567">+94771234567</a>
            </div>
          </div>
        </footer>
      </div>
    </form>
  );
}

export default App;
