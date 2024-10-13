import './Modal.css'; // Import your CSS file

const Modal = ( {showModal, toggleModal, bookingDetails} ) => {
  if (!bookingDetails) return null; // Early return if no booking details are provided

  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={toggleModal}>&times;</span>
        <h2>Booking Details</h2>
        <ul>
          <li><strong>Vehicle Make:</strong> {bookingDetails.vehiclemake}</li>
          <li><strong>Vehicle Type:</strong> {bookingDetails.vehicletype}</li>
          <li><strong>Vehicle Number:</strong> {bookingDetails.vehiclenumber}</li>
          <li><strong>Manufactured Year:</strong> {bookingDetails.manufecturedyear}</li>
          <li><strong>Preferred Date:</strong> {bookingDetails.preferreddate}</li>
          <li><strong>Preferred Time:</strong> {bookingDetails.preferredtime}</li>
          <li><strong>Vehicle Owner Name:</strong> {bookingDetails.vehicleownername}</li>
          <li><strong>Mobile Number:</strong> {bookingDetails.mobilenumber}</li>
          <li><strong>Email:</strong> {bookingDetails.email}</li>
          <li><strong>Message:</strong> {bookingDetails.message}</li>
          <li><strong>User ID:</strong> {bookingDetails.userId}</li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;
