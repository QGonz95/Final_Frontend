import React, { useState } from 'react'
import axios from 'axios';

const Signup = (props) => {
  let emptyUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    username: "",
  };

  const [user, setUser] = useState(emptyUser);
  const [error, setErr] = useState({});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${props.baseUrl}api/user`, user)
      .then((response) => {
        setErr({});
        props.setCurrentUser(response.data);
        localStorage.setItem("currentUser", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        setErr(error.response.data);
      });
  };

  return (
      <section className="bg-gray-50 pt-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="/home" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Lift
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create Account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                  <input onChange={handleChange} type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="" required />
                </div>
                <div>
                  <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                  <input onChange={handleChange} type="text" name="last_name" id="Last_name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="" required />
                </div>
                <div>
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                  <input onChange={handleChange} type="text" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                  <input onChange={handleChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full bg-light-blue-400   hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                <p className="text-sm font-light text-gray-500">
                  Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Signup