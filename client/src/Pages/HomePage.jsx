
import { useEffect, useState } from "react";
import { FileText, ArrowUp, Contact } from "lucide-react";

import "./HomePage.css";
import Logo from "../assets/photos/logo.png";
import ImageA from "../assets/photos/A.png";
import ImageB from "../assets/photos/B.png";
import ImageC from "../assets/photos/C.png";
import ImageD from "../assets/photos/D.png";
import ImageE from "../assets/photos/E.png";
import ImageF from "../assets/photos/F.png";
import ImageH from "../assets/photos/H.png";
import ImageG from "../assets/photos/G.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";
import Modal from "../components/Modal";


const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [notification, setNotification] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    vehiclemake: "",
    vehicletype: "",
    vehiclenumber: "",
    manufecturedyear: "",
    preferreddate: "",
    preferredtime: "",
    vehicleownername: "",
    mobilenumber: "",
    email: "",
    message: "",
    userId: "",
  });
  const [showBookingModal, setShowBookingModal] = useState(false);

  useEffect(() => {
    const getNotification = async () => {
      if (user) {
        const response = await fetch(
          `http://localhost:3000/api/notification/getNotification/${user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const result = await response.json();
        setNotification(result.data.reverse());
        if (!response.ok) {
          console.error("Error: " + result.error);
        }
      }
    };

    const getBookingDetails = async () => {
      if (user) {
        const response = await fetch(
          `http://localhost:3000/api/booking/${user._id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setBookingDetails(data.data);
        } else {
          console.error("Error: " + data.error);
        }
      }
    };

    getNotification();
    getBookingDetails();
  }, [user]); // Added user as a dependency

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Thank you for your feedback!");
      setFormData({ name: "", number: "", message: "" }); // Reset form after submission
    } else {
      alert("Error: " + data.error);
    }
  };

  const handleSignup = () => navigate("/signupoption");
  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);
  const toggleModal = () => setShowModal(!showModal);
  const handleNotificationClick = () => {
    setShowBookingModal(true);
    toggleModal(); // Close the notification modal
  };

  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <img
            className="Logo"
            src={Logo}
            style={{ width: "150px", height: "150px" }}
            alt="Logo"
          />
          <nav className="nav-menu">
            <div className="nav-links">

              <Link to="/">HOME</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="#">SERVICES</Link>
              <Link to="#">OFFERS</Link>
              <Link to="#">STORE</Link>
              {token ? (
                <>
                  <button className="notification-btn" onClick={toggleModal}>
                    <IoNotificationsSharp size={20} />
                  </button>
                  {showModal && (
                    <>
                      <div className="notification-modal">
                        <span className="close" onClick={toggleModal}>
                          &times;
                        </span>
                        {notification.map((note, index) => (
                          <button
                            key={index}
                            onClick={handleNotificationClick}
                            className="modal-content"
                          >
                            <h2>{note.topic}</h2>
                            <p>{note.message}</p>
                          </button>
                        ))}
                      </div>
                      {showBookingModal && (
                        <Modal
                          bookingDetails={bookingDetails}
                          toggleModal={toggleBookingModal}
                          showModal={showBookingModal}
                        />
                      )}
                    </>
                  )}

                  <button className="logout-btn" onClick={handleLogout}>
                    LOGOUT
                  </button>
                </>
              ) : (
                <button className="sign-up-btn" onClick={handleSignup}>
                  SIGN UP
                </button>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero-section container">
          <div className="hero-content">
            <p className="welcome-text">
              Welcome, {user ? user.fullname : "Guest"} !
            </p>
            <h1>
              <span>INNOVATIVE</span> VEHICLE
              <br />
              SERVICE <span>SOLUTIONS</span>
            </h1>
            <p>
              REVOLUTIONIZING VEHICLE CARE: STREAMLINING
              <br />
              SERVICE CENTERS WITH AUTOMATED SOLUTIONS
            </p>
            <div className="hero-actions">
              {token ? (
                <Link to={"/bdetails"}>
                  <button className="book-btn">
                    <FileText />
                    BOOK NOW
                  </button>
                </Link>
              ) : (
                <>
                  <button className="sign-up-btn" onClick={handleSignup}>
                    SIGN UP
                  </button>
                  <p className="login-text">
                    or{" "}
                    <a href="#" onClick={handleLogin}>
                      CLICK HERE
                    </a>{" "}
                    to Log in
                  </p>
                </>
              )}
            </div>
          </div>
          <img
            className="ImageA"
            src={ImageA}
            style={{ width: "500px", height: "auto" }}
            alt="Hero"
          />
        </section>

        {/* What We Do Section */}
        <section className="what-we-do container">
          <div className="mechanic-image">
            <img
              className="ImageB"
              src={ImageB}
              style={{ width: "400px", height: "400px" }}
              alt="Mechanic"
            />
          </div>
          <div className="service-details">
            <h2>What we do?</h2>
            <p>
              Streamlining vehicle service operations with smart solutions for
              efficiency and ease.
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
          <img
            className="ImageC"
            src={ImageC}
            style={{ width: "auto", height: "700px" }}
            alt="Wheel Set"
          />
        </div>


        {/* History Section */}
        <section className="history-section-container">
          <h2>History</h2>
          <p className="history-text">
            Established in 2010, our vehicle service center began as a small
            family-owned garage with a passion for quality and customer care.
            Over the years, we have grown into a trusted name in vehicle
            maintenance and repair through dedicated customer relationships. Our
            journey has always been driven by innovation, ensuring we offer the
            latest technology and services to keep vehicles running smoothly.
            Today, we continue to uphold our commitment to excellence, providing
            fast, reliable, and professional service for every vehicle that comes
            through our doors.
          </p>
        </section>

        {/* Our Services Section */}
        <section className="our-services">
          <h2>Our Services</h2>
          <div className="services-container">
            <div className="service-card">
              <img
                className="ImageD"
                src={ImageD}
                style={{ width: "350px", height: "200px" }}
                alt="Service D"
              />
              <p className="service-description">Regular Maintenance</p>
            </div>
            <div className="service-card">
              <img
                className="ImageE"
                src={ImageE}
                style={{ width: "350px", height: "200px" }}
                alt="Service E"
              />
              <p className="service-description">Brake Inspection</p>
            </div>
            <div className="service-card">
              <img
                className="ImageF"
                src={ImageF}
                style={{ width: "350px", height: "200px" }}
                alt="Service F"
              />
              <p className="service-description">Tire Rotation</p>
            </div>
            <div className="service-card">

              <img
                className="ImageG"
                src={ImageG}
                style={{ width: "350px", height: "200px" }}
                alt="Service G"
              />
              <p className="service-description">Oil Change</p>
            </div>
            <div className="service-card">
              <img
                className="ImageH"
                src={ImageH}
                style={{ width: "350px", height: "200px" }}
                alt="Service H"
              />
              <p className="service-description">Transmission Repair</p>
            </div>
        </div>
     </section>

        <button  className="back-to-top"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <ArrowUp />
          </button>
       </main>


        {/* Feedback Section */}
        <section className="feedback-section">
          <h2>Feedback</h2>
          <form onSubmit={handleSubmit} className="feedback-form">
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              required
            />
            <input
              type="tel"
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              placeholder="Your Phone Number"
              required
            />
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Your Feedback"
              required
            />
            <button type="submit">Submit Feedback</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
      </footer>

    </div>
   );
 };


export default HomePage;

