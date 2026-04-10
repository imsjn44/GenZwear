import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { backendURL } = useContext(ShopContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Endpoint for requesting a password reset
      const response = await axios.post(
        backendURL + "/api/user/forgot-password",
        {
          email,
        },
      );

      if (response.data.success) {
        setIsSent(true);
        toast.success("Reset link sent to your email!");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Reset Password</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {!isSent ? (
        <form onSubmit={onSubmitHandler} className="w-full flex flex-col gap-4">
          <p className="text-gray-600 text-sm text-center">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="Email address"
            required
          />

          <div className="w-full flex justify-between text-sm">
            <Link to="/login" className="cursor-pointer hover:text-black">
              Back to Login
            </Link>
          </div>

          <button
            disabled={loading}
            className="bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-500"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-600 mb-4">
            ✔ Email sent! Please check your inbox.
          </p>
          <Link to="/login" className="text-black border-b border-black">
            Return to Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
