import React, { useState } from "react";
import { backendURL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
//when we re not authenticated we will show the login page

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      //   console.log(email, password);
      const response = await axios.post(backendURL + "/api/user/admin", {
        email,
        password,
      });
      //   console.log(response);
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      RadioNodeList.error(error.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md  roundeds-lg px-8 py-6 max-w-md ">
        <h1 className="text-2xl font-bold mb-2">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="">
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium">Email address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2"
              type="email"
              placeholder="Your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            className="mt-2 w-full py-2 px-4 rounded-md  text-white bg-black cursor-pointer"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
