import React from "react";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";


const Header = () => {
  return (
    <header className="border-b-2 h-14 flex gap-5 justify-between">
        <h1 class="px-12 py-2 text-3xl bg-gradient-to-r  from-[#BD5AE4] via-[#BD5AE4]  to-[#5D66F3] inline-block text-transparent bg-clip-text font-bold tracking-widest">
          Infits
        </h1>
      <div className="flex gap-5 items-center m-5">
        <Link to="/">Contact Us</Link>
        <Link to="/">News</Link>
        <IoIosNotifications className="text-xl"/>
        <Link to='/sign-up'>
            <button className="outline outline-[#BD5AE4] hover:bg-gradient-to-r from-[#d999f3] via-[#d999f3]  to-[#979efe] hover:outline-none rounded-lg p-2 font-medium">Sign Up</button>
        </Link>

      </div>
    </header>
  );
};

export default Header;
