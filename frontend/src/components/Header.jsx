import React from "react";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { GiMountainRoad } from "react-icons/gi";

const Header = () => {
  return (
    <header className="border-b-2 h-14 flex gap-5 justify-between items-center">
    <div className="flex flex-row items-center px-12 py-2">
      <GiMountainRoad className="text-3xl fill-[#BD5AE4]"/>
      <h1 className="p-2 text-3xl bg-gradient-to-r  from-[#BD5AE4] via-[#BD5AE4]  to-[#5D66F3] inline-block text-transparent bg-clip-text font-bold tracking-widest">
        Infits
      </h1>
    </div>
      <div className="flex items-center m-5 gap-5">
        <Link to="/">CONTACT US</Link>
        <Link to="/">NEWS</Link>
        <IoIosNotifications className="hidden text-xl md:block" />
        <Link to="/sign-up">
          <button className="sm:outline-none md:outline-[#BD5AE4] hover:bg-gradient-to-r from-[#d999f3] via-[#d999f3]  to-[#979efe] hover:outline-none rounded-lg md:p-2 font-medium " >
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
