import { useState, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MechanicUserProfile = () => {
  // const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    mechanicId: '',
    address: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMechanicDetails = async () => {
      const mechanicId = localStorage.getItem('mechanicId');
      if (mechanicId) {
        try {
          const response = await axios.get(`http://localhost:3000/api/mechanics/${mechanicId}`);
          const mechanic = response.data;
          setFormData({
            name: mechanic.name,
            email: mechanic.email,
            phoneNumber: mechanic.phoneNumber,
            mechanicId: mechanic.mechanicId,
            address: mechanic.address,
          });
          console.log(mechanic);
          
        } catch (error) {
          console.error('Error fetching mechanic details:', error);
        }
      }
    };

    fetchMechanicDetails();
  }, []);

  // const handleSaveClick = async () => {
  //   setIsEditing(false);
  //   const mechanicId = localStorage.getItem('mechanicId');
  //   try {
  //     await axios.put(`http://localhost:3000/api/mechanics/${mechanicId}`, formData);
  //   } catch (error) {
  //     console.error('Error saving mechanic details:', error);
  //   }
  // };

  // const handleCancelClick = () => {
  //   setIsEditing(false);
  //   const fetchMechanicDetails = async () => {
  //     const mechanicId = localStorage.getItem('mechanicId');
  //     if (mechanicId) {
  //       try {
  //         const response = await axios.get(`http://localhost:3000/api/mechanics/${mechanicId}`);
  //         const mechanic = response.data;
  //         setFormData({
  //           name: mechanic.name,
  //           email: mechanic.email,
  //           phoneNumber: mechanic.phoneNumber,
  //           mechanicId: mechanic.mechanicId,
  //           address: mechanic.address,
  //         });
  //       } catch (error) {
  //         console.error('Error fetching mechanic details:', error);
  //       }
  //     }
  //   };

  //   fetchMechanicDetails();
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-4">Mechanic Profile</h1>
        <div className="flex flex-col items-center">
          <div className="relative">
            <img
              src={'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p className="text-gray-600">{formData.name}</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <p className="text-gray-600">{formData.email}</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
            <p className="text-gray-600">{formData.phoneNumber}</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Mechanic ID:</label>
            <p className="text-gray-600">{formData.mechanicId}</p>
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <p className="text-gray-600">{formData.address}</p>
          </div>
          <div className="mt-4 flex gap-4 items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <FaEdit className="inline-block mr-1" /> Edit Profile
            </button>
          <button
            onClick={() => navigate('/mdashboard')}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
          >
            Go to Dashboard
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicUserProfile;
