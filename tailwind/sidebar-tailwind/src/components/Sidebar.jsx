import React from "react";

export default function Sidebar() {
  return (
    <>
      <div
        className="
          transition-all duration-1000 ease-in-out md:flex flex-col  md:w-60 w-20 
           h-screen p-4 gap-3 shadow-xl"
      >
        <h2 className="text-xl font-semibold mb-3">Side Bar</h2>
        <div className=" rounded p-2 hover:bg-gray-400 cursor-pointer  ">
          Home
        </div>
        <div className="rounded p-2 hover:bg-gray-400 cursor-pointer  ">
          Webiners
        </div>
        <div className="rounded p-2 hover:bg-gray-400 cursor-pointer  ">
          Billings
        </div>
        <div className="rounded p-2 hover:bg-gray-400 cursor-pointer  ">
          User-Management
        </div>
        <div className="rounded p-2 hover:bg-gray-400 cursor-pointer  ">
          Settings
        </div>
      </div>
    </>
  );
}
