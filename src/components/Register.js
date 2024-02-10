

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import moment from "moment";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    gender:"",
    age: "",
    dob: new Date(),
    contact: "",
    address: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // const handleDateChange = (date) => {
  //   const year = date.getFullYear();
  //   const month = date.getMonth() + 1;
  //   const day = date.getDate();
  //   const selectedDate = new Date(year, month - 1, day);
  //   setValues({ ...values, dob: selectedDate });
  // };  

  const handleDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Pad single-digit months with leading zero
    const day = String(date.getDate()).padStart(2, '0'); // Pad single-digit days with leading zero
    const formattedDate = `${year}-${month}-${day}`;
    const newdate = moment(formattedDate).utc().format('YYYY-MM-DD')
    setValues({ ...values, dob: newdate });
  };
  
  
  
  
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const handleGenderChange = (selectedOption) => {
    setValues({ ...values, gender: selectedOption.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8081/register", values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate("/login");
          alert("Successfully Registered! Redirected to login...")
        } else {
          alert("Error");
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 ">
      <form onSubmit={handleSubmit} className="w-[50rem] bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h1 className="text-3xl font-semibold text-center mb-8 text-blue-600">Registration Form</h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your name"
              required
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Gender:</label>
            <Select
              options={genderOptions}
              onChange={handleGenderChange}
              className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Select gender"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="age" className="block text-gray-600">Age:</label>
            <input
              type="text"
              name="age"
              id="age"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your age"
              required
              onChange={(e) => setValues({ ...values, age: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Date of Birth:</label>
            <DatePicker
              selected={values.dob}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              className="w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholderText="Select date"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-gray-600">Contact number:</label>
            <input
              type="text"
              name="contact"
              id="contact"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your contact number"
              required
              onChange={(e) => setValues({ ...values, contact: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your address"
              required
              onChange={(e) => setValues({ ...values, address: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email address:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your email address"
              required
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
              placeholder="Your password"
              required
              onChange={(e) => setValues({ ...values, password: e.target.value })}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Register
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account?</span>
          <Link to="/login" className="text-blue-500 ml-1 hover:underline">Login here</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
