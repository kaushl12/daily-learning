import React from "react";

function Maincontent() {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="h-32 bg-black"></div>

        <div className="px-5 -mt-10 md:mt-5">
          <h1 className="text-3xl font-bold text-gray-800">Good Morning,</h1>
          <p className="text-xl text-gray-600 font-medium">Prabhleen</p>
        </div>

        <div className="grid grid-cols-11 gap-8 p-5">
          <div
            className="
            h-72 rounded-2xl bg-white p-3 
            col-span-11 md:col-span-2  
            -translate-y-14 md:-translate-y-14
            shadow-lg ml-2 md:ml-0
            flex flex-col justify-center items-center
          "
          >
            <img
              className="h-auto max-w-32 mb-3 rounded-full"
              src="./src/assets/profile.jpg"
              alt="profile"
            />
            <div className="font-bold text-lg">Kaushal CK</div>
            <div className="mt-2 text-gray-600">kaushal@gmail.com</div>
            <div className="mt-1 text-gray-600">9876453210</div>
            <div className="mt-3 text-gray-600">Delhi, India</div>
          </div>

          <div
            className="
            h-96 rounded-2xl bg-blue-200 shadow-lg 
            col-span-11 md:col-span-6
          "
          >
            Card-2
          </div>

          <div
            className="
            h-96 rounded-2xl bg-red-200 shadow-lg 
            col-span-11 md:col-span-3
          "
          >
            Card-3
          </div>
        </div>
      </div>
    </>
  );
}

export default Maincontent;
