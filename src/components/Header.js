

import React, { useState } from "react";
import { FcBusinesswoman } from "react-icons/fc";
import Logo from "../images/Logo.png";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { PiTextOutdentBold } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import SidebarIcons from "./SidebarIcons";
import Sidebar from "./Sidebar";


const Header = () => {
  const [showSidebarIcons, setShowSidebarIcons] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSidebar = () => {
    setShowSidebarIcons(!showSidebarIcons);
  };
  const toggleProfile=()=>{
    setShowProfile(!showProfile)
    
  }
  


  return (

  
    <>
      <div className="min-h-[100vh] w-full bg-[#F8F8F8]">
        <div className="bg-[#F8F8F8] sticky top-0 z-50 flex items-center justify-between px-4 py-2 w-full left-nav-item ">
          <div className="flex items-center  gap-x-3 sm:gap-x-4 md:gap-x-7 ">
            <a className="hidden sm:block">
              <img
                className="  block cursor-pointer logo-image"
                src={Logo}
                alt=""
              />
            </a>
            <PiTextOutdentBold className="text-2xl" onClick={toggleSidebar} />
          </div>
          <div className="flex items-center gap-x-4">
          <div className="overflow-hidden border w-6 h-6 cursor-pointer rounded-full">
    <LiaFlagUsaSolid className="text-3xl w-full h-full bg-red-400 text-white bg-cover" />
  </div>
            <CiBellOn className="text-2xl " />
            <button className="flex items-center cursor-pointer gap-x-1 md:pr-4 lg:pr-4 xl:pr-4" onClick={toggleProfile}>
              <span>
                <FcBusinesswoman className="text-3xl" />
              </span>
              <span className="font-semibold text-[#1e0a27] hidden lg:block">
                Super Admin
              </span>
              <span>
                <IoIosArrowDown />
              </span>
            </button>
            {/* *********** */}

            {showProfile &&
            <div className=" bg-white flex-col items-start w-[97%] mr-[2%] sm:mr-0 sm:w-[155px] top-[11%] right-[0%] sm:right-[3%] gap-y-2 text-[15px] justify-center rounded-xl py-1 text-[#8d94a5] font-semibold fixed shadow-sm shadow-black">
              <div className="flex flex-col items-center w-full py-1 border-b gap-y-1">
                <h5 className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4 py-2 transition-all duration-500 cursor-pointer">
                  <FaUser />
                  <span>
                    <a
                      className="hover:text-[#8d94a5] hover:no-underline"
                      href="/myprofile"
                    >
                      Profile
                    </a>
                  </span>
                </h5>
                <h5 className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4 py-2 transition-all duration-500 cursor-pointer">
                  <IoSettingsOutline />
                  <span>
                    <a
                      className="hover:text-[#8d94a5] hover:no-underline"
                      href="/settings/basic-setting"
                    >
                      Settings
                    </a>
                  </span>
                </h5>
              </div>

              <h5
                role="button"
                className="flex items-center gap-x-2 hover:bg-[#F8F8F8] hover:text-[#57595c] w-full px-4  transition-all duration-500 cursor-pointer py-2"
              >
                <AiOutlineLogout />
                <span>Logout</span>
              </h5>
            </div>
            }
          </div>
        </div>
        {showSidebarIcons ? <Sidebar /> : <SidebarIcons />}
        
      </div>
    </>
  );
};

export default Header;
