import React, {useState} from "react";
import { Link, useNavigate ,  } from "react-router-dom";
import axios from 'axios'



const Login = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  
  axios.defaults.withCredentials  = true;
  

const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        if (res.data.Status === "Success") {
          navigate('/');
        } else {
          // Handle login failure here
          alert("Incorrect email or password. Please try again.");
        }
      })
      .catch(err => {
        // Handle axios request error here
        console.error("Error during login:", err);
        alert("Error during login. Please try again later.");
      });
  };
  

  return (
    <>
   <div className="flex justify-center items-center h-screen bg-gray-200">
  <form onSubmit={handleSubmit} className="w-80 border border-gray-400 p-8 bg-white rounded-lg shadow-md">
    <h1 className="text-3xl font-semibold text-center mb-8 text-blue-600">Login</h1>
    <div className="mb-4">
      <label htmlFor="email" className="block text-gray-600">Email address:</label>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full mt-1 px-4 py-2 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="Your email"
        required
        onChange={e => setValues({...values, email:e.target.value})}
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
        onChange={e => setValues({...values, password:e.target.value})}
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      Login
    </button>
    <div className="text-center mt-4">
      <span className="text-gray-600">Don't have an account?</span>
      <Link to='/register' className="text-blue-500 ml-1 hover:underline">Register here</Link>
    </div>
  </form>
</div>


    </>
  );
};

export default Login;
