  // import React, { useEffect, useState } from "react";
  // import { Link, useNavigate } from "react-router-dom";
  // import axios from "axios";

  // const Home = () => {
  //   const [auth, setAuth] = useState(false);
  //   const [message, setMessage] = useState("");
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  //   const [contact, setContact] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [gender, setGender] = useState("");
  //   const [dob, setDob] = useState("");
  //   const navigate = useNavigate();

  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8081")
  //       .then((res) => {
  //         if (res.data.Status === "Success") {
  //           setAuth(true);
  //           setName(res.data.name);
  //           setAge(res.data.age);
  //           setGender(res.data.gender);
  //           setEmail(res.data.email);
  //           setContact(res.data.contact);
  //           setAddress(res.data.address);
  //           setDob(res.data.dob);
  //         } else {
  //           setAuth(false);
  //           setMessage(res.data.Error);
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }, []); // Empty dependency array, runs once on component mount


  //   const handleLogout = () => {
  //     // Perform logout logic here
  //     setAuth(false);
  //     setName("");
  //     navigate('/login')
  //     // Redirect to login page after logout
  //   };
  //   console.log(age);

  //   return (
    
  // <div>
  //   {auth ? (
  //     <div className="max-w-md mx-auto p-6">
  //       <div className="bg-white shadow-md rounded-md p-6">
  //         <h1 className="text-2xl font-bold mb-4">Welcome <span className="text-blue-500">{name}</span></h1>
  //         <h1 className="text-xl font-bold mb-4">Your<span className="text-blue-500">-Profile</span></h1>
  //         <div className="grid grid-cols-1 gap-4">
  //           <div className="flex">
  //             <p className="text-gray-600"><span className="font-bold">Email:</span> {email}</p>
  //           </div>
  //           <div className="flex flex-col">
  //             <p className="text-gray-600"><span className="font-bold">Age:</span> {age}</p>
  //           </div>
  //           <div className="flex flex-col">
  //             <p className="text-gray-600"><span className="font-bold">Gender:</span> {gender}</p>
  //           </div>
  //           <div className="flex flex-col">
  //             <p className="text-gray-600"><span className="font-bold">Date of Birth:</span> {dob}</p>
  //           </div>
  //           <div className="flex flex-col">
  //             <p className="text-gray-600"><span className="font-bold">Address:</span> {address}</p>
  //           </div>
  //           <div className="flex flex-col">
  //             <p className="text-gray-600"><span className="font-bold">Contact:</span> {contact}</p>
  //           </div>
  //         </div>
  //       </div>
  //       <button onClick={handleLogout} className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Logout</button>
  //     </div>
  //   ) : (
  //     <div className="max-w-md mx-auto p-6">
  //       <div className="bg-white shadow-md rounded-md p-6">
  //         <h3 className="text-gray-900 mb-4">{message}</h3>
  //         <h3 className="text-gray-900 mb-4">Login now</h3>
  //         <Link to="/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</Link>
  //       </div>
  //     </div>
  //   )}
  // </div>

    
  //   );
  // };

  // export default Home;


  import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const Home = () => {
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        if (res.data.Status === "Success") {
          setAuth(true);
          setName(res.data.name);
          setAge(res.data.age);
          setGender(res.data.gender);
          setEmail(res.data.email);
          setContact(res.data.contact);
          setAddress(res.data.address);
          setDob(res.data.dob);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []); // Empty dependency array, runs once on component mount

  const handleLogout = () => {
    // Perform logout logic here
    setAuth(false);
    setName("");
    navigate('/login')
    // Redirect to login page after logout
  };

  const handleUpdate = () => {
    navigate('/UpdateProfile');
  };

 


  return (
    <div>
      {auth ? (
        <div className="max-w-md mx-auto p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h1 className="text-2xl font-bold mb-4">Welcome <span className="text-blue-500">{name}</span></h1>
            <h1 className="text-xl font-bold mb-4">Your<span className="text-blue-500">-Profile</span></h1>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex">
                <p className="text-gray-600"><span className="font-bold">Email:</span> {email}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600"><span className="font-bold">Age:</span> {age}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600"><span className="font-bold">Gender:</span> {gender}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600"><span className="font-bold">Date of Birth:</span> {dob}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600"><span className="font-bold">Address:</span> {address}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-gray-600"><span className="font-bold">Contact:</span> {contact}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button onClick={handleUpdate} className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2">Update Details</button>
            <button onClick={handleLogout} className=" mt-5 block px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:bg-red-600">Logout</button>
          </div>
        </div>
      ) : (
        <div className="max-w-md mx-auto p-6">
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-gray-900 mb-4">{message}</h3>
            <h3 className="text-gray-900 mb-4">Login now</h3>
            <Link to="/login" className="block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;



