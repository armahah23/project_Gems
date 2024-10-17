import { useEffect, useState } from "react";
import { FileText, ArrowUp } from "lucide-react";
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
import facebook_icon from "../assets/icons/facebook_icon.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { IoNotificationsSharp } from "react-icons/io5";
import Address from "../assets/icons/Address.png";
import RingerVolume from "../assets/icons/RingerVolume.png";
import google_icon from "../assets/icons/google_icon.png";
import x from "../assets/icons/x.png";
import insta from "../assets/icons/insta.png";
import Swal from "sweetalert2";
import UserModal from "../components/UserModal";

const HomePage = () => {
  const { user, setUser, fetchUser } = useAuth();
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
    if (user == null) {
      fetchUser();
    }

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

  //handle feedback form submission
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
      Swal.fire({
        title: "Noted 😊",
        text: "Thank you for your feedback.",
        icon: "success",
        confirmButtonText: "Awesome",
      });
      setFormData({ name: "", number: "", message: "" }); // Reset form after submission
    } else {
      alert("Error: " + data.error);
    }
  };

  const handleSignup = () => navigate("/signupoption");
  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user clicked 'Yes, logout!'
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        localStorage.removeItem("userId");
        localStorage.removeItem("userEmail");
        localStorage.clear();
        navigate("/");
        setUser(null);
      }
    });
  };

  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);
  const toggleModal = () => setShowModal(!showModal);
  const handleNotificationClick = () => {
    setShowBookingModal(true);
    toggleModal(); // Close the notification modal
  };

  return (
    <>
      {showBookingModal && (
        <UserModal
          bookingDetails={bookingDetails}
          toggleModal={toggleBookingModal}
          showModal={showBookingModal}
        />
      )}
      <div className="home-page">
        {/* Header */}
        <header className="header px-[100px]">
          <div className="flex w-[100%] justify-between items-center">
            <img
              className="Logo"
              src={Logo}
              style={{ width: "90px", height: "70px" }}
              alt="Logo"
            />
            <nav className="nav-menu">
              <div className="nav-links">
                <Link to="/">HOME</Link>
                {token && <Link to="/contact">CONTACT</Link>}

                <Link to="#">SERVICES</Link>
                <Link to="#">OFFERS</Link>
                {token && <Link to="/store">STORE</Link>}
                {/* <Link to="/store">STORE</Link> */}
                {token ? (
                  <>
                    <button
                      className="hover:bg-transparent notification-btn"
                      onClick={toggleModal}
                    >
                      <IoNotificationsSharp size={20} />
                    </button>
                    {showModal && (
                      <div className="notification-modal z-[10000] ">
                        <button
                          className="absolute bg-gray-200 h-[30px] w-[30px] top-[5px] right-[5px] text-black rounded-2xl text-[20px]"
                          onClick={toggleModal}
                        >
                          &times;
                        </button>
                        {notification.map((note, index) => (
                          <button
                            key={index}
                            onClick={()=>handleNotificationClick(note._id, note.bookingId)}
                            className="notification-content"
                          >
                            <h2>{note.topic}</h2>
                            <p>{note.message}</p>
                          </button>
                        ))}
                      </div>
                    )}
                    <button
                      className="btn text-white px-3 w-[100px] rounded hover:bg-blue-700 h-[40px] bg-primary"
                      onClick={handleLogout}
                    >
                      LOGOUT
                    </button>
                  </>
                ) : (
                  <button
                    className="sign-up-btn px-4 rounded hover:bg-blue-700"
                    onClick={handleSignup}
                  >
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
              <p className="text-[40px] font-serif font-bold text-gray-500 mt-5">
                Welcome, {user ? user.fullname : "Guest"}!
              </p>
              <h1>
                <span>INNOVATIVE</span> VEHICLE
                <br />
                SERVICE <span>SOLUTIONS</span>
              </h1>
              <p className="text-gray-700 text-[20px] ">
                REVOLUTIONIZING VEHICLE CARE: STREAMLINING
                <br />
                SERVICE CENTERS WITH AUTOMATED SOLUTIONS
              </p>
              <div className="hero-actions">
                {token ? (
                  <Link to={"/ebservice"}>
                    <button className="book-btn">
                      <FileText />
                      BOOK NOW
                    </button>
                  </Link>
                ) : (
                  <div className="flex items-center">
                    <button className="sign-up-btn" onClick={handleSignup}>
                      SIGN UP
                    </button>
                    <p className="px-5 mt-[40px]">
                      or{" "}
                      <a
                        href="#"
                        className="text-blue-700 underline"
                        onClick={handleLogin}
                      >
                        CLICK HERE
                      </a>{" "}
                      to Log in
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="p-[100px]">
              <img
                className="ImageA"
                src={ImageA}
                style={{ width: "350px", height: "auto" }}
                alt="Hero"
              />
            </div>
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
              maintenance and repair through dedicated customer relationships.
              Our journey has always been driven by innovation, ensuring we
              offer the latest technology and services to keep vehicles running
              smoothly. Today, we continue to uphold our commitment to
              excellence, providing fast, reliable, and professional service for
              every vehicle that comes through our doors.
            </p>
          </section>

          {/* Our Services Section */}
          <section className="p-5">
            <h2 className="flex justify-center items-center font-semibold text-3xl p-2">
              Our Services
            </h2>

            <div className="flex flex-wrap justify-center px-3 space-x-4">
              {/* Service D */}
              <div className="service-card flex flex-col items-center justify-between w-[350px] h-[450px] p-4 bg-white rounded-lg shadow-md mb-6">
                <img
                  className="ImageD"
                  src={ImageD}
                  style={{ width: "350px", height: "300px" }}
                  alt="Service D"
                />
                <p className="service-description text-center mt-auto">ADMIN</p>
                <p>
                  An administrator in our vehicle service center manages tasks,
                  tracks repairs, and ensures efficient service to meet customer
                  needs.
                </p>
              </div>

              {/* Service E */}
              <div className="service-card flex flex-col items-center justify-between w-[350px] h-[450px] p-4 bg-white rounded-lg shadow-xl mb-6">
                <img
                  className="ImageE"
                  src={ImageE}
                  style={{ width: "350px", height: "300px" }}
                  alt="Service E"
                />
                <p className="service-description text-center mt-auto">
                  CUSTOMER
                </p>
                <p>
                  A customer in our vehicle service center books services,
                  tracks repair status, and receives updates for a smooth
                  experience.
                </p>
              </div>

              {/* Service F */}
              <div className="service-card flex flex-col items-center justify-between w-[350px] h-[450px] p-4 bg-white rounded-lg shadow-md mb-6">
                <img
                  src={ImageF}
                  style={{ width: "350px", height: "300px" }}
                  alt="Service F"
                />
                <p className="service-description text-center mt-auto">
                  MECHANIC
                </p>
                <p>
                  A mechanic in vehicle service center handles repairs, updates
                  progress, and ensures timely completion of services.
                </p>
              </div>
            </div>
          </section>
          <div className="relative">
            <div className="absolute h-[800px] w-[100px] top-[-350px]">
              <img src={ImageH} alt="Service H" className="h-[500px]" />
            </div>
          </div>

          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp />
          </button>

          {/* Feedback Section */}
        </main>
        <div className="relative">
          <div className="py-[70px]">
            <div className="w-[100vw] flex justify-center items-center bg-white bg-transparent relative z-[1]">
              <div className="bg-white bg-opacity-40 shadow-2xl rounded-3xl w-[60%] p-[50px]">
                <p className="text-center underline text-[26px] font-bold">
                  Need Help!
                </p>

                <div className="w-[100%] flex justify-center">
                  <img
                    className="border-1 w-[350px]"
                    src={ImageG}
                    alt="Service G"
                  />
                </div>

                <p className="text-center py-5 text-[15px]">
                  We’re here to provide expert assistance every step of the way.
                  Whether you need guidance on services, help with scheduling,
                  or any other support, our dedicated team is ready to ensure
                  your experience is seamless and stress-free.
                </p>

                <div className="w-[100%] flex gap-16 items-center">
                  <div className="w-[50%] h-[400px] p-4 flex flex-col justify-center items-center rounded-[20px] bg-gray-500 text-white">
                    <div className="text-center mb-4">
                      <h3 className="font-bold bg-green-500 text-white rounded-2 mb-4">
                        OPENING HOURS
                      </h3>
                      <p className="text-left">Mon - Fri: 7 AM - 6 PM</p>
                      <p className="text-left">Sat - Sun: 7 AM - 6 PM</p>
                    </div>

                    <div className="flex items-center mb-4">
                      <img
                        src={Address}
                        alt="Address Icon"
                        className="w-6 h-6 mr-2 address_1"
                      />
                      <p>Puttalam, Kalpitiya Road Kurinchipity, South</p>
                    </div>

                    <div className="flex items-center mb-4">
                      <img
                        src={RingerVolume}
                        alt="Phone Icon"
                        className="w-6 h-6 mr-2"
                      />
                      <p>0778353336 / 0771234567 / 0771234567</p>
                    </div>

                    <div className="flex gap-3 ">
                      <div className="border border-black rounded bg-white pionter-cursor h p-[5px]">
                        <img
                          src={google_icon}
                          alt="Google Icon"
                          className="h-[30px]"
                        />
                      </div>
                      <div className="border border-black rounded bg-white pionter-cursor h p-[5px]">
                        <img
                          src={facebook_icon}
                          alt="Facebook Icon"
                          className="h-[30px]"
                        />
                      </div>
                      <div className="border border-black rounded bg-white pionter-cursor h p-[5px]">
                        <img
                          src={insta}
                          alt="Insta Icon"
                          className="h-[30px]"
                        />
                      </div>
                      <div className="border border-black rounded bg-white pionter-cursor h p-[5px]">
                        <img src={x} alt="X Icon" className="h-[30px]" />
                      </div>
                    </div>
                  </div>

                  <div className="w-[50%]">
                    <h2 className="text-black-300 text-2xl mb-[0] px-8 font-bold">
                      Feedback
                    </h2>
                    <form onSubmit={handleSubmit} className="feedback-form p-8">
                      <input
                        className="mb-[30px] w-[100%] h-[50px] p-4"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Your Name"
                        required
                      />
                      <input
                        className="mb-[30px] w-[100%] h-[50px] p-4"
                        type="tel"
                        value={formData.number}
                        onChange={(e) =>
                          setFormData({ ...formData, number: e.target.value })
                        }
                        placeholder="Your Phone Number"
                        required
                      />
                      <textarea
                        className="mb-[30px] w-[100%] h-[50px] py-3 px-4 rounded-lg"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="Your Feedback"
                        required
                      />
                      <button
                        type="submit"
                        className="bg-green-700 text-white w-[200px] rounded-lg p-[10px] hover:bg-green-900 "
                      >
                        Submit Feedback
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="polygon-box absolute bottom-0 z-[0]"></div>
        </div>

        <footer className="footer flex justify-center items-center py-5 bg-gray-200">
          <p className="">
            &copy; 2024 Your Company Name. All Rights Reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;
