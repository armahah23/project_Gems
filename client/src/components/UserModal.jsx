import "./Modal.css"; // Import your CSS file
import { useNavigate } from "react-router-dom";

const UserModal = ({ showModal, toggleModal, bookingDetails }) => {
  const navigate = useNavigate();

  const closeModal = () => {
    toggleModal();
    localStorage.removeItem("bookingId");
  };

  const handlePayNow = () => {
    navigate(`/payment/${bookingDetails._id}`);
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content relative text-gray-100">
        <button
          className="absolute bg-gray-200 h-[30px] w-[30px] top-[5px] right-[5px] text-black rounded-2xl text-[20px]"
          onClick={closeModal}
        >
          &times;
        </button>
        <h2 className="text-center font-bold text-xl mb-2">Booking Details</h2>
        <div className="w-[100%] flex my-2">
          <div className="w-[50%]">
            <ul className="popup-ul">
              <li>Vehicle Make: {bookingDetails.vehiclemake}</li>
              <li>Vehicle Type: {bookingDetails.vehicletype}</li>
              <li>Vehicle Number: {bookingDetails.vehiclenumber}</li>
              <li>Manufactured Year: {bookingDetails.manufecturedyear}</li>
              <li>Preferred Date: {bookingDetails.preferreddate}</li>
            </ul>
          </div>
          <div className="w-[50%]">
            <ul className="popup-ul">
              <li>Preferred Time: {bookingDetails.preferredtime}</li>
              <li>Vehicle Owner Name: {bookingDetails.vehicleownername}</li>
              <li>Mobile Number: {bookingDetails.mobilenumber}</li>
              <li>Email: {bookingDetails.email}</li>
              <li>Message: {bookingDetails.message}</li>
            </ul>
          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center mt-6">
          <div>
            {/* Conditional Rendering */}
            {bookingDetails.isAccepted === "pending" && (
              <span className="text-yellow-600 font-bold">
                Booking is Pending...
              </span>
            )}
            {bookingDetails.isAccepted === "accepted" && (
              <span className="text-yellow-600 font-bold">
                Booking is accepted, He will come soon...
              </span>
            )}
            {bookingDetails.isAccepted === "completed" &&
              bookingDetails.isPaid === false && (
                <div className="flex items-center gap-12">
                  <span className="text-green-400 font-bold w-[80%]">
                    Your service is complete. Please proceed with the payment.
                  </span>
                  <button
                    onClick={handlePayNow}
                    className="h-[40px] w-[150px] px-2 bg-gray-100 text-black hover:bg-gray-700 hover:text-white"
                  >
                    Pay Now
                  </button>
                </div>
              )}
            {bookingDetails.isAccepted === "completed" &&
              bookingDetails.isPaid === true && (
                <div className="flex items-center gap-12">
                  <span className="text-green-300 font-bold">
                    Thank you! Your payment has been successfully received.
                  </span>
                  <button className="h-[40px] px-6 bg-green-800 hover:bg-green-700 text-white text-black cursor-not-allowed">
                    Print
                  </button>
                </div>
              )}

            {bookingDetails.isAccepted === "rejected" && (
              <span className="text-red-600 font-bold">
                Booking is rejected
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
