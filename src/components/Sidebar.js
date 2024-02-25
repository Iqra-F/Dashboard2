import React from "react";
import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import HeroSection from "./HeroSection";

const Sidebar = () => {
  const [isSubcategoryMenuOpen, setIsSubcategoryMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleSubcategoryMenu = () => {
    setIsSubcategoryMenuOpen(!isSubcategoryMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <div className="flex w-full">
      <div className="lg:w-[260px] w-[240px] block   bg-[#F8F8F8] fixed left-0 lg:sticky top-[10%] lg:top-0  h-screen transition-all duration-200 z-100">
        <div className="lg:w-[245px]  absolute top-[0%] lg:top-[11%] lg:fixed left-0  justify-center items-start flex flex-col px-[30px] py-4 gap-y-[32px]  text-[#83878a]">
          {/* //Dashboard */}
          <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className="text-blue-500 z-30 flex items-center gap-x-2">
                  <MdOutlineDashboard />
                  <span className="block">Dashboard</span>
                </div>
              </a>
              <div className="block"></div>
            </button>
          </div>
          {/* category */}
          <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a className="hover:no-underline hover:text-blue-500" href="">
                <div className=" z-30 flex items-center gap-x-2">
                  <IoFolderOutline />
                  <span>Category</span>
                </div>
              </a>
              <div>
                <IoIosArrowDown onClick={toggleSubcategoryMenu} />
              </div>
            </button>
            {isSubcategoryMenuOpen && (
              <div className=" text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
                <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/category"
                  >
                    Category
                  </a>
                </div>
                <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/subcategory"
                  >
                    Sub Category
                  </a>
                </div>
              </div>
            )}
          </div>
          {/* subscription */}
          <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className=" z-30 flex items-center gap-x-2">
                  <IoFolderOutline />
                  <span className="block">Subscription</span>
                </div>
              </a>
              <div className="block">
                <IoIosArrowDown />
              </div>
            </button>
          </div>
          {/* Packages */}
          <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className=" z-30 flex items-center gap-x-2">
                  <LuPackage className="text-xl "/>
                  <span className="block">Packages</span>
                </div>
              </a>
              <div className="block"></div>
            </button>
          </div>
          {/* settings */}
          <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className=" z-30 flex items-center gap-x-2">
                  <IoSettingsOutline className="text-xl "/>
                  <span className="block">Settings</span>
                </div>
              </a>
              <div className="block"></div>
            </button>
          </div>
          {/* users */}
          <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className=" z-30 flex items-center gap-x-2">
                  <LuPackage  className="text-xl "/>
                  <span className="block">Users</span>
                </div>
              </a>
              <div className="block"></div>
            </button>
          </div>
          {/* profile */}
          <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
            <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
              <a href="hover:no-underline hover:text-blue-500" className="">
                <div className=" z-30  flex items-center gap-x-2">
                  <TbUserCircle className="text-xl "/>
                  <span className="block">Profile</span>
                </div>
              </a>
              <div className="block">
                <IoIosArrowDown onClick={toggleProfileMenu} />
              </div>
            </button>
            {isProfileMenuOpen && (
              <div className=" text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
                <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/category"
                  >
                    My profile
                  </a>
                </div>
                <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/subcategory"
                  >
                    Change Password
                  </a>
                </div>
              </div>
              
            )}
          </div>
          {/* current version */}
          <h6 className="text-center pl-1 w-full py-3 font-[600] hover:text-blue-500 transition-all ml-1 duration-200 cursor-pointer gap-x-2">
            <span className="inline-block">Current Version : </span> 1.1
          </h6>
        </div>
      </div>

      <HeroSection />
    </div>
  );
};

export default Sidebar;
