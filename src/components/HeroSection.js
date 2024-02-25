
import React from "react";
import { useState } from "react";
import Data from "./Data";
import Cards from "./Cards";
import ColChart from "./ColChart";
import OrderTable from "./OrderTable";
import PackagesTable from "./PackagesTable";

const HeroSection = () => {
  const [cards, setcards] = useState(Data);
  return (
    <>
      <div className="flex flex-col sm:z-0 relative  w-full">
        <div className="ml-[2%] md:ml-[2%] w-[95%] sm:w-[96%]  px-4 py-4 z-0 flex flex-col items-start bg-white rounded-3xl container-fluid">
          <h1 className="mt-1 text-3xl font-semibold">Dashboard</h1>
          <p className="mt-2 text-base text-[#83878a]">
            Welcome back, Super Admin{" "}
          </p>
          <div className="flex flex-wrap  w-full py-1 mt-3 mr-3 gap-x-1 gap-y-6">
            <Cards cards={cards} />
          </div>

          <div className="flex flex-col flex-wrap  items-start justify-center w-full p-3 mt-3 bg-[#F8F8F8] border rounded-lg">
            <h1 className="text-xl font-semibold ">Weekly Registration</h1>
            <p className="mt-1 text-3xl font-semibold">0</p>
            <div className="px-3  text-sm w-[100%] ">
              <ColChart />
            </div>
          </div>

          {/* tables */}
          <div className="flex flex-col flex-wrap items-start justify-between w-full mt-3 gap-y-4 lg:gap-y-0 both-tables lg:flex-row ">
            {/* table 1*/}

            <div className="flex flex-col flex-wrap items-start justify-center w-[100%] lg:w-[59%]  p-3 bg-[#F8F8F8] border rounded-lg overflow-hidden">
              <h1 className="text-xl font-semibold">Orders</h1>
              <div className="w-full my-3 overflow-x-auto border">
                <OrderTable />
              </div>
              <div className="w-full">
                <h4 className="font-semibold text-center text-blue-500">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/allorders"
                  >
                    <span className="cursor-pointer">View All</span>
                  </a>
                </h4>
              </div>
            </div>
            {/* table2 */}
            <div className="flex flex-col flex-wrap items-start justify-center w-[100%] lg:w-[40%] md:h-[100%] p-3 bg-[#F8F8F8] border rounded-lg overflow-hidden">
              <div className="flex flex-wrap items-center justify-between w-full">
                <h1 className="text-xl font-semibold">Packages</h1>
                <h4 className="text-blue-500 font-semibold text-center ">
                  <a
                    className="hover:no-underline hover:text-blue-500"
                    href="/packages"
                  >
                    <span className="cursor-pointer">View All</span>
                  </a>
                </h4>
                <div className="border overflow-x-auto w-full my-3">
                  <PackagesTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;