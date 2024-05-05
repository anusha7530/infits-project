import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdBusinessCenter, MdEmail } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const SideBar = () => {
  return (
    <div className="w-full border-r-2 h-full">
      <div className="flex flex-col gap-1 py-4 px-1 text-lg">
        <Link
          to="/?tab=dash"
          className="flex flex-row items-center px-7 hover:bg-gradient-to-r from-[#5D66F3] to-white hover:rounded-lg focus:bg-gradient-to-r focus:from-[#5D66F3] focus:to-white focus:rounded-lg"
        >
          <MdDashboard />
          <span className="p-2">Dashboard</span>
        </Link>
        <Link
          to="/?tab=jobs"
          className="flex flex-row items-center px-7 hover:bg-gradient-to-r  from-[#5D66F3] to-white hover:rounded-lg focus:bg-gradient-to-r focus:from-[#5D66F3] focus:to-white focus:rounded-lg"
        >
          <MdBusinessCenter />
          <span className="p-2">Jobs</span>
        </Link>
        <Link
          to="/?tab=network"
          className="flex flex-row items-center px-7 hover:bg-gradient-to-r  from-[#5D66F3] to-white hover:rounded-lg focus:bg-gradient-to-r focus:from-[#5D66F3] focus:to-white focus:rounded-lg"
        >
          <FaNetworkWired />
          <span className="p-2">My Network</span>
        </Link>
        <Link
          to="/?tab=resume"
          className="flex flex-row items-center px-7 hover:bg-gradient-to-r  from-[#5D66F3] to-white hover:rounded-lg focus:bg-gradient-to-r focus:from-[#5D66F3] focus:to-white focus:rounded-lg"
        >
          <ImProfile />
          <span className="p-2">My Resume</span>
        </Link>
        <Link
          to="/?tab=emails"
          className="flex flex-row items-center px-7 hover:bg-gradient-to-r  from-[#5D66F3] to-white hover:rounded-lg focus:bg-gradient-to-r focus:from-[#5D66F3] focus:to-white focus:rounded-lg"
        >
          <MdEmail />
          <span className="p-2">Emails</span>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
