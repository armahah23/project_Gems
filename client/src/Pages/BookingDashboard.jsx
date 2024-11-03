import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";
// import { MdDashboard } from "react-icons/md";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserModal from "../components/UserModal";

const BookingDashboard = () => {
    const userId = localStorage.getItem("userId");
  const [currentBooking, setCurrentBooking] = useState(null);
  const [allBookings, setAllBookings] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const toggleBookingModal = () => setShowBookingModal(!showBookingModal);


  useEffect(() => {
    fetchBooking();
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/getAllBookings/${userId}`
      );
      const data = response.data;
      if (response.status === 200) {
        console.log({ ss: data.data });
        setAllBookings(data.data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Error: ${data.error}`, // Display the dynamic error message
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setShowBookingModal(true);
  };

  return (
    <>
    {showBookingModal && (
        <UserModal
          bookingDetails={currentBooking}
          toggleModal={toggleBookingModal}
          showModal={showBookingModal}
        />
      )}
    <div className="mt-10"><Navbar /></div>
      <div className="m-6 text-[48px] font-extrabold flex items-center justify-between uppercase text-[#204a64]">
        <div>Bookings</div>
        {/* <Link to="/admin/dashboard" className="cursor:pointer">
          <MdDashboard />
        </Link> */}
      </div>
      <div className="container mx-auto p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  User Name
                </th>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  Mechanic Name
                </th>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  Accept Status
                </th>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  Paid Status
                </th>
                <th className="px-6 py-3 text-left bg-gray-100 border-b">
                  See More
                </th>
              </tr>
            </thead>
            <tbody>
              {allBookings.map((booking, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b">
                    {booking.userId.fullname}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {booking.mechanicId.firstname}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {booking.preferreddate} - {booking.preferredtime}{" "}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {booking.isAccepted === "pending" && (
                      <button className="px-4 py-2 text-sm text-white bg-orange-500 rounded-lg">
                        Pending
                      </button>
                    )}

                    {booking.isAccepted === "accepted" && (
                      <button className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg">
                        Ongoing
                      </button>
                    )}

                    {booking.isAccepted === "rejected" && (
                      <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg">
                        Rejected
                      </button>
                    )}

                    {booking.isAccepted === "completed" && (
                      <button className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg">
                        Completed
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 border-b">
                    {booking.isPaid && (
                      <button className="px-4 py-2 text-sm text-white bg-green-500 rounded-lg">
                        <TiTick />
                      </button>
                    )}
                    {!booking.isPaid && (
                      <button className="px-4 py-2 text-sm text-white bg-red-500 rounded-lg">
                        <MdOutlineCancel />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 border-b">
                    <button
                      className="px-4 py-2 text-sm text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
                      onClick={() => handleEdit(booking)}
                    >
                      <FaRegEdit />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BookingDashboard;
