import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-slate-300">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] rounded-md"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our store</p>
          <p className="text-gray-500">
            Children Park Area
            <br />
            Hetauda, Makwanpur, Nepal
          </p>
          <p className="text-gray-500">
            Tel:+057-525785
            <br />
            Email:genzwear.ecom@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Genzwear
          </p>
          <p className="text-gray-500">
            Learn more about our team and job openings.
          </p>
          <button className="border border-slate-300 text-gray-500 px-8 py-4 hover:bg-black hover:text-white cursor-pointer">
            Explore jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
