import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
// import { useState } from 'react';
// import axios from 'axios';

const PaymentSuccess = () => {
  // const [bookingDetails, setBookingDetails] = useState(null);
  const navigate = useNavigate();
  
  // const fetchBookingDetails = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/api/getBooking/${bookingId}`);
  //     if (response.status === 200) {
  //       setBookingDetails(response.data);
  //     }

  //     const details = bookingDetails.works
      
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleReturnHome = () => {
    navigate('/');
  };

  const handlePrint = () => {
    // fetchBookingDetails();
    window.print();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <FaCheckCircle className="text-green-500 text-6xl mb-4 mx-auto" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Successful</h1>
        <p className="text-gray-600 mb-6">Thank you for your payment. Your transaction was successful.</p>
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handlePrint}
          >
            Print
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleReturnHome}
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;