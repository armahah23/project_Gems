import { useEffect, useState } from "react";
import axios from "axios";
import { MdOutlineCancel } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import EditBookingModal from "./EditBooking";

const ManageBooking = () => {
  const [currentBooking, setCurrentBooking] = useState(null);
  const [allBookings, setAllBookings] = useState([]);
  const [allMechanics, setAllMechanics] = useState([]);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    fetchBooking();
    fetchMechanics();
  }, []);

  const fetchBooking = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/admin/getAllBookings`
      );
      const data = response.data;
      if (response.status === 200) {
        console.log({ ss: data.data });
        setAllBookings(data.data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchMechanics = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/getAllMechanics",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status == "200") {
        setAllMechanics(response.data.data);
      }
    } catch (error) {
      console.error("Error during getting mechanics", error);
    }
  };

  const handleEdit = (booking) => {
    setCurrentBooking(booking);
    setIsEditModalOpen(true);
  };
  const handleSave = async (assignedMechanicId) => {
    console.log("assignedMechanic", assignedMechanicId);
    try {
      const response = await axios.post(
        `http://localhost:3000/api/admin/assignMechanic/${currentBooking._id}`,
        {
          mechanicId: assignedMechanicId,
        }
      );
      if (response.status === 200) {
        alert("Booking updated successfully");
        fetchBooking();
        setIsEditModalOpen(false);
        setCurrentBooking(null);
      } else {
        alert("Failed to update booking");
      }
    } catch (error) {
      console.error("Error during updating booking", error);
    }
  };

  return (
    <>
      {isEditModalOpen && (
        <EditBookingModal
          currentBooking={currentBooking}
          allMechanics={allMechanics}
          onClose={() => setIsEditModalOpen(false)}
          onSubmit={handleSave}
        />
      )}
  
      <div className="m-6 text-[56px] font-extrabold uppercase text-[#204a64]">Manage booking</div>
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
                  Actions
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

export default ManageBooking;
