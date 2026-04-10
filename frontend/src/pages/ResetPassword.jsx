import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams(); // Gets the token from the URL
  const navigate = useNavigate();
  const { backendURL } = useContext(ShopContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);
    try {
      const response = await axios.post(
        backendURL + "/api/user/reset-password",
        {
          token,
          newPassword,
        },
      );

      if (response.data.success) {
        toast.success("Password updated successfully!");
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Link expired or invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">New Password</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      <form onSubmit={onSubmitHandler} className="w-full flex flex-col gap-4">
        <p className="text-gray-600 text-sm text-center">
          Please enter your new password below.
        </p>

        <input
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="New Password"
          required
          minLength={8}
        />

        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Confirm New Password"
          required
        />

        <button
          disabled={loading}
          className="bg-black text-white font-light px-8 py-2 mt-4 disabled:bg-gray-500"
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
