import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 mt-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Genzwear is your go-to destination for bold, trendy, and affordable
            fashion. We bring you the latest streetwear and everyday essentials
            designed to match your vibe and confidence. Stay stylish, stay
            unique.At Genzwear, we believe fashion is more than clothing — it’s
            self-expression.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 sm:mt-12">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li className="hover:text-black">Home</li>
            <li className="hover:text-black">About us</li>
            <li className="hover:text-black">Delivery</li>
            <li className="hover:text-black">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 mt-1 sm:mt-12">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer">
            <li className="hover:text-black">+057-528887</li>
            <li className="hover:text-black">genzwear.ecom@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2026@genzwear&trade;.com- All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
