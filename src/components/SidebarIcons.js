import React from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { IoFolderOutline } from "react-icons/io5";
import { LuPackage } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import HeroSection from "./HeroSection";

const SidebarIcons = () => {
  
  return (
    <>
      <div className="flex w-full">
        <div className="hidden lg:block md:w-[80px]  bg-[#F8F8F8] fixed left-0 lg:sticky top-[10%] lg:top-0  h-screen transition-all duration-200 z-10 overflow-hidden">
          <div className="w-[60px] lg:w-[90px] ml-1  absolute top-[0%] lg:top-[11%] lg:fixed left-0  justify-center items-start flex flex-col px-[30px] py-4 gap-y-[32px]  text-[#83878a] overflow-hidden ">
            {/* 1 */}
            <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a className="hover:no-underline hover:text-blue-500" href="/">
                  <div className="text-blue-500 z-30 flex items-center gap-x-2">
                    <MdOutlineDashboard />
                    <span className="hidden">Dashboard</span>
                  </div>
                </a>
                <div className="hidden"></div>
              </button>
            </div>

            {/* 2 */}
            <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a className="hover:no-underline hover:text-blue-500" href="">
                  <div className=" z-30 flex items-center gap-x-2">
                    <IoFolderOutline />
                    <span className="hidden">Category</span>
                  </div>
                </a>
                <div className="hidden">
                  <IoIosArrowDown />
                </div>
              </button>
              <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
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
            </div>
            {/* 3 */}
            <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a className="hover:no-underline hover:text-blue-500" href="">
                  <div className=" z-30 flex items-center gap-x-2">
                    <IoFolderOutline />
                    <span className="hidden">Subscription</span>
                  </div>
                </a>
                <div className="hidden">
                  <IoIosArrowDown />
                </div>
              </button>
              <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
                <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/allorders"
                  >
                    All Orders
                  </a>
                </div>
                <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/userpackages"
                  >
                    User Packages
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a
                  className="hover:no-underline hover:text-blue-500"
                  href="/packages"
                >
                  <div className=" z-30 flex items-center gap-x-2">
                    <LuPackage />
                    <span className="hidden">Packages</span>
                  </div>
                </a>
                <div className="hidden"></div>
              </button>
            </div>
            {/* 5 */}
            <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a
                  className="hover:no-underline hover:text-blue-500"
                  href="/settings/basic-setting"
                >
                  <div className=" z-30 flex items-center gap-x-2">
                    <IoSettingsOutline />
                    <span className="hidden">Settings</span>
                  </div>
                </a>
                <div className="hidden"></div>
              </button>
            </div>
            {/* 6 */}
            <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a className="hover:no-underline hover:text-blue-500" href="/users">
                  <div className=" z-30 flex items-center gap-x-2">
                    <LuPackage />
                    <span className="hidden">Users</span>
                  </div>
                </a>
                <div className="hidden"></div>
              </button>
            </div>
            {/* 7 */}
            <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
              <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
                <a className="hover:no-underline hover:text-blue-500" href="">
                  <div className=" z-30 flex items-center gap-x-2">
                    <TbUserCircle />
                    <span className="hidden">Profile</span>
                  </div>
                </a>
                <div className="hidden">
                  <IoIosArrowDown  />
                </div>
              </button>
              <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
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
            </div>
            {/* 8 */}
            <h6 className="text-left pl-1 w-full py-3 font-[600] hover:text-blue-500 transition-all ml-1 duration-200 cursor-pointer gap-x-2">
              <span className="hidden">Current Version : </span> 1.1
            </h6>
          </div>
        </div>
        <HeroSection />
      </div>
    </>
    // old-----------------
    // <div className=" lg:block md:w-[80px]  bg-[#F8F8F8] fixed left-0 lg:sticky top-[10%] lg:top-0  h-screen transition-all duration-200 z-10 overflow-hidden">
    //   {/* Dashboard icon */}
    //   <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="/">
    //         <div className="text-blue-500 z-30 flex items-center gap-x-2">
    //           <MdOutlineDashboard />
    //           <span className="hidden">Dashboard</span>
    //         </div>
    //       </a>
    //       <div className="hidden"></div>
    //     </button>
    //   </div>
    //   {/* Catgory icon */}
    //   <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="">
    //         <div className=" z-30 flex items-center gap-x-2">
    //           <IoFolderOutline />
    //           <span className="hidden">Category</span>
    //         </div>
    //       </a>
    //       <div className="hidden">
    //         <IoIosArrowDown />
    //       </div>
    //     </button>
    //     <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
    //       <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a className="hover:no-underline hover:text-blue-500" href="/category">
    //           Category
    //         </a>
    //       </div>
    //       <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a
    //           className="hover:no-underline hover:text-blue-500"
    //           href="/subcategory"
    //         >
    //           Sub Category
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Subs icon */}
    //   <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="">
    //         <div className=" z-30 flex items-center gap-x-2">
    //           <IoFolderOutline />
    //           <span className="hidden">Subscription</span>
    //         </div>
    //       </a>
    //       <div className="hidden">
    //         <IoIosArrowDown />
    //       </div>
    //     </button>
    //     <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
    //       <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a className="hover:no-underline hover:text-blue-500" href="/allorders">
    //           All Orders
    //         </a>
    //       </div>
    //       <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a
    //           className="hover:no-underline hover:text-blue-500"
    //           href="/userpackages"
    //         >
    //           User Packages
    //         </a>
    //       </div>
    //     </div>
    //   </div>

    //   {/*Packages icon */}
    //   <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="/packages">
    //         <div className="ml-1 z-30 flex items-center gap-x-2">
    //         <LuPackage />
    //           <span className="hidden">Packages</span>
    //         </div>
    //       </a>
    //       <div className="hidden"></div>
    //     </button>
    //   </div>
    //   {/*settings icon */}
    //   <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a
    //         className="hover:no-underline hover:text-blue-500"
    //         href="/settings/basic-setting"
    //       >
    //         <div className="ml-1 z-30 flex items-center gap-x-2">
    //         <IoSettingsOutline />
    //           <span className="hidden">Settings</span>
    //         </div>
    //       </a>
    //       <div className="hidden"></div>
    //     </button>
    //   </div>
    //   {/* users icon */}
    //   <div className=" pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className=" flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="/users">
    //         <div className="ml-1 z-30 flex items-center gap-x-2">
    //         <LuPackage />
    //           <span className="hidden">Users</span>
    //         </div>
    //       </a>
    //       <div className="hidden"></div>
    //     </button>
    //   </div>
    //   {/* Dashboard icon */}
    //   <div className="max-h-[24px] pl-1 overflow-hidden  flex flex-col font-[600] ease-in-out transition-max-height duration-500  w-full ">
    //     <button className="text-[#83878a] flex items-center justify-between w-full cursor-pointer hover:text-blue-500">
    //       <a className="hover:no-underline hover:text-blue-500" href="">
    //         <div className=" z-30 flex items-center gap-x-2">
    //         <TbUserCircle />
    //           <span className="hidden">Profile</span>
    //         </div>
    //       </a>
    //       <div className="hidden">
    //         <IoIosArrowDown />
    //       </div>
    //     </button>
    //     <div className="hidden text-sm font-semibold flex flex-col items-start justify-start w-full px-3 pt-4 gap-y-3">
    //       <div className="  relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a className="hover:no-underline hover:text-blue-500" href="/myprofile">
    //           My Profile
    //         </a>
    //       </div>
    //       <div className=" relative before:inline-block before:w-[6px] before:h-[6px] before:bg-[#666869] before:rounded-full  before:mr-[6px] content-[''] w-full cursor-pointer  hover:before:bg-blue-500 hover:text-blue-500">
    //         <a
    //           className="hover:no-underline hover:text-blue-500"
    //           href="/changepassword"
    //         >
    //           Change Password
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* Current ver */}
    //   <h6 className="text-left pl-1 w-full py-3 font-[600] hover:text-blue-500 transition-all ml-1 duration-200 cursor-pointer gap-x-2">
    //     <span className="hidden">Current Version : </span> 1.1
    //   </h6>
    // </div>
  );
};

export default SidebarIcons;
