import { useEffect, useState } from "react";
import "./Bookingdetails.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { API_BASE_URL } from "../config/config.js";

function Bookingdetails() {
  const { user, addedItem } = useAuth(); // Get addedItem from AuthContext
  const [allMechanics, setAllMechanics] = useState([]);
  const [userName, setUserName] = useState(user?.fullname || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [mobileNumber, setMobileNumber] = useState(user?.phone || "");
  const [selectedMechanic, setSelectedMechanic] = useState("");
  const [yearError, setYearError] = useState("");
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMechanics = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/bookingSlot/getAllMechanics`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200) {
          setAllMechanics(response.data.data);
        }
      } catch (error) {
        console.error("Error during getting mechanics", error);
      }
    };

    fetchMechanics();
  }, []);

  const [form, setForm] = useState({
    vehicleMake: "",
    vehicleModel: "",
    vehicleNumber: "",
    manufacturedYear: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "manufacturedYear") {
      const year = parseInt(value);
      if (year > currentYear) {
        setYearError(`Year cannot be greater than ${currentYear}`);
      } else {
        setYearError("");
      }
    }

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMechanicChange = (e) => {
    const mechanicId = e.target.value;
    setSelectedMechanic(mechanicId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (
      !form.vehicleMake ||
      !form.vehicleModel ||
      !form.vehicleNumber ||
      !form.manufacturedYear ||
      !userName ||
      !mobileNumber ||
      !userEmail
    ) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
      });
      return;
    }

    const bookingData = {
      vehiclemake: form.vehicleMake,
      vehicletype: form.vehicleModel,
      vehiclenumber: form.vehicleNumber,
      manufecturedyear: form.manufacturedYear,
      preferreddate: form.preferredDate,
      preferredtime: form.preferredTime,
      vehicleownername: userName,
      mobilenumber: mobileNumber,
      model: addedItem ?? "No item selected",
      email: userEmail,
      message: form.message,
      userId: user._id,
      mechanicId: selectedMechanic,
    };

    try {
      let bookingId;
      const response = await fetch(`${API_BASE_URL}/api/booking`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Booking creation failed:", errorData);
        throw new Error("Failed to create booking");
      }
      const responseData = await response.json();

      // Access the new booking's _id
      if (response.status === 200) {
        bookingId = responseData.data._id;
        // console.log("New booking ID:", bookingId);
      }
      // console.log("Booking created successfully", user._id);

      const sendNotification = await fetch(
        `${API_BASE_URL}/api/notification/createNotification/${user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId: bookingId,
            mechanicId: selectedMechanic,
            topic: "Booking",
            message: "Booking created successfully",
          }),
        }
      );
      // console.log("Notification response:", sendNotification);

      if (!sendNotification.ok) {
        const notificationError = await sendNotification.json();
        console.error("Notification sending failed:", notificationError);
        throw new Error("Failed to send notification");
      }

      Swal.fire({
        title: "Success!",
        text: "Your operation was successful.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/");
      setForm({
        vehicleMake: "",
        vehicleModel: "",
        vehicleNumber: "",
        manufacturedYear: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
        mechanicId: "",
      });
      setUserName("");
      setMobileNumber("");
      setUserEmail("");
    } catch (error) {
      console.error(
        "Error during booking creation or notification sending:",
        error
      );
      Swal.fire({
        icon: "error",
        title: "Booking Failed!",
        text: "Failed to create booking or send notification. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 8; hour <= 15; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        times.push(time);
      }
    }
    return times;
  };

  const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

  const handleCancel = (e) => {
    e.preventDefault(); // Prevent default behavior if needed

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel your booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/"); // Redirect to home or another relevant page after cancellation
        Swal.fire("Cancelled!", "Your booking has been cancelled.", "success");
      }
    });
  };

  return (
    <main className="booking-details flex justify-center text-white relative overflow-hidden">
      <div className="background-design"></div>
      <div className="app-booking pb-4 ">
        <h1>SLOT BOOKING DETAILS</h1>
        <div className="bg-[#949494b1]/40 p-5 rounded-xl  bg-gray-500 flex items-center w-full">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col lg:flex-row w-ful lg:justify-between">
              {/* left */}
              <div className="w-full lg:w-1/2 flex flex-col gap-2  ">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Vehicle Make</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none "
                    type="text"
                    name="vehicleMake"
                    placeholder=" Ex: Hybrid"
                    value={form.vehicleMake}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Vehicle Model</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="text"
                    name="vehicleModel"
                    placeholder=" Ex: Vezel"
                    value={form.vehicleModel}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Vehicle Number</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="text"
                    name="vehicleNumber"
                    placeholder=" Ex: CAB - 1234"
                    value={form.vehicleNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Manufactured Year</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="manufacturedYear"
                      className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                      placeholder="Manufactured Year"
                      value={form.manufacturedYear}
                      onChange={handleChange}
                    />
                    {yearError && (
                      <p className="text-red-500 text-sm mt-1">{yearError}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1 w-full mb-2">
                  <label className="block text-md  mb-2">Preferred Date:</label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={form.preferredDate}
                    onChange={handleChange}
                    min={today} // Set minimum date to today
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none "
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-md  mb-2">Preferred Time:</label>
                  <select
                    name="preferredTime"
                    value={form.preferredTime}
                    onChange={handleChange}
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none  "
                  >
                    <option value="">Select a time</option>
                    {generateTimeOptions().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="block text-md  mb-2 ">Assign</label>

                  <select
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none   "
                    value={selectedMechanic}
                    onChange={handleMechanicChange}
                  >
                    <option className="text-gray-700" value="">
                      Select a Mechanic
                    </option>
                    {allMechanics.map((mechanic) => (
                      <option
                        key={mechanic._id}
                        className="text-gray-700"
                        value={mechanic._id}
                      >
                        {mechanic.firstname} ({mechanic.email})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* right */}
              <div className="w-full lg:w-1/2 flex flex-col gap-2">
                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Vehicle Owner Name</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="text"
                    name="ownerName"
                    placeholder=" Ex: Mr. Perera"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Mobile Number</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="text"
                    name="mobileNumber"
                    placeholder=" Ex: 078-7587700"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Selected Item</label>{" "}
                  {/* Changed label to Selected Item */}
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="text"
                    name="selectedItem"
                    placeholder="Selected Item"
                    value={addedItem} // Use addedItem from context
                    readOnly
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Email</label>
                  <input
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none"
                    type="email"
                    name="email"
                    placeholder=" Ex: abcdefgh@gmail.com"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <label className="text-start">Message</label>
                  <textarea
                    className="w-full lg:w-11/12 p-2 rounded-lg text-gray-700 placeholder:text-gray-500 outline-none border-none "
                    name="message"
                    placeholder=" Enter your message here"
                    value={form.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex lg:justify-between w-full lg:flex-row flex-col mt-3  lg:gap-0 gap-2 ">
              <button
                onClick={handleCancel}
                className="bg-[#EF4444] hover:bg-[#EF4444]/80 rounded-xl text-white p-3 w-full lg:w-5/12"
              >
                Cancel Booking
              </button>
              <button type="submit" className="bg-[#13496B] hover:bg-[#13496B]/80 rounded-xl text-white p-3 w-full lg:w-5/12">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Bookingdetails;
