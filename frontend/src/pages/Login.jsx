import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoIosLock } from "react-icons/io";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen mt-12">
      <div className="flex p-3 max-w-lg mx-auto rounded-lg flex-col md:flex-col md:items-center gap-1 shadow-lg shadow-gray-700 justify-center ">
        <h1 className="text-3xl bg-gradient-to-r  from-[#BD5AE4] via-[#BD5AE4]  to-[#5D66F3] inline-block text-transparent bg-clip-text font-bold tracking-widest">
          Infits
        </h1>
        <h1 className="text-xl font-semibold">Log In</h1>

        <form className="max-w-sm mx-auto m-5 w-full">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold text-gray-900">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <MdEmail className="text-xl fill-gray-600" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="example@domain.com"
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              className="block mb-2 text-sm font-bold text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <IoIosLock className="text-xl fill-gray-600" />
              </div>
              <input
                type="text"
                id="email-address-icon"
                className="bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5"
                placeholder="1234@Password"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <button
              type="submit"
              className="text-white bg-[#282828] hover:bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              LOG IN
            </button>
            <span className="">OR</span>
            <div className="flex flex-row gap-9 text-2xl text-[#282828]">
              <FaGoogle />
              <FaFacebook />
              <FaApple />
            </div>
            <div>
              <span>Not a member yet?</span>
              <Link
                to="/sign-up"
                className="p-2 bg-gradient-to-r  from-[#BD5AE4] via-[#BD5AE4]  to-[#5D66F3] inline-block text-transparent bg-clip-text font-bold"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
