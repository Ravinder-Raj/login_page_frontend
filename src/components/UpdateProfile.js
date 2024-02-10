

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const UpdateProfile = ({ name, age, gender, email, dob, address, contact }) => {
//   const [updatedProfile, setUpdatedProfile] = useState({
//     name: name,
//     age: age,
//     gender: gender,
//     email: email,
//     dob: dob ? new Date(dob) : null,
//     address: address,
//     contact: contact
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUpdatedProfile(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleDateChange = (date) => {
//     setUpdatedProfile(prevState => ({
//       ...prevState,
//       dob: date
//     }));
//   };
  
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("http://localhost:8081/UpdateProfile", updatedProfile)
//       .then((res) => {
//         if (res.data.Status === "Success") {
//           alert("Profile updated successfully! You need to login again");
//           navigate('/login');
//         } else {
//           alert("Failed to update profile. Please try again.");
//         }
//       })
//       .catch((err) => {
//         console.error("Error updating profile:", err);
//         alert("Error updating profile. Please try again later.");
//       });
//   };

//   const handleBack=()=>{
//     navigate('/')
//   }

//   return (
//     <div className="max-w-md mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
//       <form onSubmit={handleSubmit} method="POST">
//         <div className="grid grid-cols-1 gap-4">
//           <input type="text" name="name" value={updatedProfile.name} onChange={handleInputChange} placeholder="Name" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
//           <input type="text" name="age" value={updatedProfile.age} onChange={handleInputChange} placeholder="Age" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
//           <select name="gender" value={updatedProfile.gender} onChange={handleInputChange} required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500">
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <DatePicker
//             selected={updatedProfile.dob}
//             onChange={handleDateChange}
//             placeholderText="Date of Birth"
//             dateFormat="dd/MM/yyyy"
//             className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
//             required
//           />
//           <input type="text" name="address" value={updatedProfile.address} onChange={handleInputChange} placeholder="Address" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
//           <input type="text" name="contact" value={updatedProfile.contact} onChange={handleInputChange} placeholder="Contact" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
//           <h1 className="text-sm "> <b>Enter Email to update Profile</b></h1>
//           <input type="email" name="email" value={updatedProfile.email} onChange={handleInputChange} placeholder="Email" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
//         </div>
//         <button type="submit" className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Profile</button>
//         <button type="submit" onClick={handleBack} className="block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-blue-600">Back to  Profile</button>
//       </form>
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateProfile = ({ name, age, gender, email, dob, address, contact }) => {
  const [updatedProfile, setUpdatedProfile] = useState({
    name: name,
    age: age,
    gender: gender,
    email: email,
    dob: dob ? new Date(dob) : null,
    address: address,
    contact: contact
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedProfile(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setUpdatedProfile(prevState => ({
      ...prevState,
      dob: date
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/UpdateProfile", updatedProfile)
      .then((res) => {
        if (res.data.Status === "Success") {
          alert("Profile updated successfully! You need to login again");
          navigate('/login');
        } else {
          alert("Failed to update profile. Please try again.");
        }
      })
      .catch((err) => {
        console.error("Error updating profile:", err);
        alert("Error updating profile. Please try again later.");
      });
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
      <form onSubmit={handleSubmit} method="POST">
        <div className="grid grid-cols-1 gap-4">
          <input type="text" name="name" value={updatedProfile.name} onChange={handleInputChange} placeholder="Name" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="text" name="age" value={updatedProfile.age} onChange={handleInputChange} placeholder="Age" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
          <select name="gender" value={updatedProfile.gender} onChange={handleInputChange} required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <DatePicker
            selected={updatedProfile.dob}
            onChange={handleDateChange}
            placeholderText="Date of Birth"
            dateFormat="yyyy-MM-dd" // Adjusted format to show only year, month, and day
            className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
            required
          />
          <input type="text" name="address" value={updatedProfile.address} onChange={handleInputChange} placeholder="Address" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
          <input type="text" name="contact" value={updatedProfile.contact} onChange={handleInputChange} placeholder="Contact" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
          <h1 className="text-sm "> <b>Enter Email to update Profile</b></h1>
          <input type="email" name="email" value={updatedProfile.email} onChange={handleInputChange} placeholder="Email" required className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Update Profile</button>
        <button type="button" onClick={handleBack} className="block mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:bg-blue-600">Back to Profile</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
