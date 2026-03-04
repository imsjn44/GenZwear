import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";

const PlaceOrder = () => {
  const {
    navigate,
    backendURL,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tole: "",
    city: "",
    zipcode: "",
    landmark: "",
    phonenumber: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      // console.log(orderItems);
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        //apiu call for cod
        case "cod":
          const response = await axios.post(
            backendURL + "/api/order/place",
            orderData,
            { headers: { token } },
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* Left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-">
          <Title text1={"DELIVERY"} text2={" INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="firstname"
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="lastname"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="email address"
        />
        <input
          onChange={onChangeHandler}
          name="tole"
          value={formData.tole}
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="tole"
        />
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="city"
          />
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="zip code"
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="landmark"
          value={formData.landmark}
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="landmark"
        />
        <input
          onChange={onChangeHandler}
          name="phonenumber"
          value={formData.phonenumber}
          className=" border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="phone number"
        />
      </div>
      {/* Right side */}
      <div className="m-8 ">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        {/* Payment method */}
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={" METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-slate-300 rounded-full ${method === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img src={assets.stripe_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-slate-300 rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`}
              ></p>
              <img src={assets.razorpay_logo} alt="" className="h-5 mx-4" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border  border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-slate-300 rounded-full ${method === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              type="submit"
              // onClick={() => navigate("./orders")}
              className="bg-black text-white px-16 py-3 text-sm cursor-pointer"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
