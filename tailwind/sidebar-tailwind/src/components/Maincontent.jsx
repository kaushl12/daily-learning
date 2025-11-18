import React from 'react'

function Maincontent() {
  return (
    <>
        <div className=" w-full ">


            <div className='h-32 bg-black'></div>
            <div className='grid grid-cols-11 gap-8 p-5 '>
                <div className='h-72 rounded 2xl bg-white p-3 col-span-2  -translate-y-14 shadow-lg ml-2 flex flex-col justify-center items-center'>
                    <img className="h-auto max-w-32 mb-3 " src="./src/assets/profile.jpg" alt="image description"></img>
                    <div className='font-bold' >Kaushal CK</div>
                    <div className='mt-2 text-gray-500 font-medium opacity-60' >kaushal@gmail.com</div>
                    <div className='mt-1  text-gray-500  font-medium opacity-60'>9876453210</div>
                    <div className='mt-3 mb-3  text-gray-500 font-medium opacity-60'>Delhi,India</div>

                </div>
                <div className='h-96 rounded 2xl bg-blue-200 col-span-6 shadow-lg'>Card-2</div>
                <div className='h-96 rounded 2xl bg-red-200 col-span-3 shadow-lg'>Card-3</div>
            </div>
        </div>

    </>
  )
}

export default Maincontent