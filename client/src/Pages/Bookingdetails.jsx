import { useEffect, useState } from "react";
import "./Bookingdetails.css";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Bookingdetails() {
  const { user, addedItem } = useAuth(); // Get addedItem from AuthContext
  const [allMechanics, setAllMechanics] = useState([]);
  const [userName, setUserName] = useState(user?.fullname || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const [mobileNumber, setMobileNumber] = useState(user?.phone || "");
  const navigate = useNavigate();

  useEffect(() => {
    fetchMechanics();
    console.log(addedItem);
    
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
    setForm({ ...form, [name]: value });
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
      mechanicId: form.mechanicId,
    };

    try {
      let bookingId;
      const response = await fetch("http://localhost:3000/api/booking", {
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
        `http://localhost:3000/api/notification/createNotification/${user._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookingId: bookingId,
            mechanicId: form.mechanicId,
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
      alert("Failed to create booking or send notification. Please try again.");
    }
  };

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
        Swal.fire(
          'Cancelled!',
          'Your booking has been cancelled.',
          'success'
        );
      }
    });
  };

  return (
    <main className="booking-details">
      <div className="background-design"></div>
      <div className="app-booking">
        {/* <h1>BOOKING DETAILS</h1> */}
        <div className="container-booking bg-gray-500">
          <form onSubmit={handleSubmit}>
            <div className="left">
              <div className="form-group">
                <label>Vehicle Make</label>
                <input
                  className="input-area"
                  type="text"
                  name="vehicleMake"
                  placeholder=" Ex: Hybrid"
                  value={form.vehicleMake}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Vehicle Model</label>
                <input
                  className="input-area"
                  type="text"
                  name="vehicleModel"
                  placeholder=" Ex: Vezel"
                  value={form.vehicleModel}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Vehicle Number</label>
                <input
                  className="input-area"
                  type="text"
                  name="vehicleNumber"
                  placeholder=" Ex: CAB - 1234"
                  value={form.vehicleNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Manufactured Year</label>
                <input
                  className="input-area"
                  type="text"
                  name="manufacturedYear"
                  placeholder=" Ex: 2040"
                  value={form.manufacturedYear}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  className="input-area"
                  type="date"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Preferred Time</label>
                <input
                  className="input-area"
                  type="time"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="right">
              <div className="form-group">
                <label>Vehicle Owner Name</label>
                <input
                  className="input-area"
                  type="text"
                  name="ownerName"
                  placeholder=" Ex: Mr. Perera"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  className="input-area"
                  type="text"
                  name="mobileNumber"
                  placeholder=" Ex: 078-7587700"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Selected Item</label>{" "}
                {/* Changed label to Selected Item */}
                <input
                  className="input-area"
                  type="text"
                  name="selectedItem"
                  placeholder="Selected Item"
                  value={addedItem} // Use addedItem from context
                  readOnly
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  className="input-area"
                  type="email"
                  name="email"
                  placeholder=" Ex: abcdefgh@gmail.com"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="textarea-last"
                  name="message"
                  placeholder=" Enter your message here"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-between w-[100%] px-8 mb-4">
              <h2 className="text-center text-lg font-bold">
                Please select a mechanic
              </h2>
              <div className="flex flex-wrap justify-center">
                <select
                  className="dropdown p-2 w-[250px]"
                  value={form.mechanicId}
                  onChange={(e) =>
                    setForm({ ...form, mechanicId: e.target.value })
                  }
                >
                  <option value="">Select a mechanic</option>
                  {allMechanics.map((mechanic) => (
                    <option key={mechanic._id} value={mechanic._id}>
                      {mechanic.firstname} ({mechanic.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center ">
              <button type="submit" className="btn">
                Book Now
              </button>
              <button
                onClick={handleCancel}
                className="bg-red-500 hover:bg-red-300 text-white p-1 w-[200px] text-uppercase rounded-[10px]"
              >
                Cancel Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Bookingdetails;
