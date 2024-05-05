import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashBoard from "../pages/Dashboard";
import Jobs from "../pages/Jobs";
import Network from "../pages/Network";
import Resume from "../pages/Resume";
import Emails from "../pages/Emails";

const Home = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) setTab(tabFromUrl);
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <SideBar />
      </div>
      {tab === "dash" && <DashBoard />}
      {tab === "jobs" && <Jobs />}
      {tab === "network" && <Network />}
      {tab == "resume" && <Resume />}
      {tab == "emails" && <Emails />}
    </div>
  );
};

export default Home;
