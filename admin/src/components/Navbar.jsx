import { assets } from "../assets/assets";
import Login from "./Login";

const Navbar = ({ setToken }) => {
  return (
    <div className="bg-slate-300 flex justify-between items-center p-2">
      <img className="w-28 ml-7" src={assets.logo} alt="" />
      <button
        onClick={() => setToken("")}
        className="bg-black text-white px-5 py-2 sm:px-7 sm:py-2  rounded-full text-sm mr-7 mt-6 cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
