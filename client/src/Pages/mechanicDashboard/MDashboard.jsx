import './mdashboard.css';
import logo from '../../assets/photos/logo.png';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Modal from '../../components/Modal';


const Dashboard = () => {
  const { user } = useAuth();
  const [notification, setNotification] = useState([]);
  const [bookingDetails, setBookingDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const toggleModal = () => setShowModal(!showModal);
  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);

  const handleNotificationClick = async (bookingId) => {
    const response = await fetch(
      `http://localhost:3000/api/booking/${bookingId}`,
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
      setShowBookingModal(true);
      toggleModal(); // Close the notification modal
    } else {
      console.error("Error: " + data.error);
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="flex flex-col justify-center items-center sidebar">
        <div className="m-2">
          <img src={logo} alt="AutoCare Logo" className='w-[200px]' />
        </div>
        <nav className="menu">
          <ul>
            <li><button>Work</button></li>
            <li><button>Add Work</button></li>
            <li><button>Assign Work</button></li>
            <li>
              <button onClick={toggleModal}>
                Notification 
              </button>
            </li>
            <li><button>Settings</button></li>
            <li><button>Profile</button></li>
          </ul>
        </nav>
      </aside>
      <main className="dashboard">
        <h1>Dashboard</h1>
        <div className="work-grid">
          <div className="work-item">Add Work</div>
          <div className="work-item">On going Work</div>
          <div className="work-item">Add Work</div>
          <div className="work-item">Add Work</div>
        </div>
      </main>

      {showModal && (
        <>
          <div className="notification-modal">
            <span className="close" onClick={toggleModal}>&times;</span>
            {notification.map((note, index) => (
              <button
                key={index}
                onClick={() => handleNotificationClick(note.bookingId)}
                className="modal-content"
              >
                <h2>{note.topic}</h2>
                <p>{note.message}</p>
              </button>
            ))}
          </div>
          {showBookingModal && bookingDetails && (
            <Modal
              bookingDetails={bookingDetails}
              toggleModal={toggleBookingModal}
              showModal={showBookingModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Dashboard;
