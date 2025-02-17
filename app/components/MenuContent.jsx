import React from 'react'
import Close from './icons/Close';

export default function MenuContent({setOpenMenu}) {

  

  return (
    <div className="flex md:hidden gap-4 text-base justify-between fixed bg-black/50 backdrop-blur-sm top-0 -bottom-100 right-0 h-screen w-full z-30">
      <div className='w-4/6 bg-white flex flex-col gap-4 h-full px-6 pt-6'>
        <p className="text-[#FF9800] font-bold border-b cursor-pointer border-[#FF9800]">
          Home
        </p>
        <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">
          Crop management
        </p>
        <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">
          Market Insights
        </p>
        <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">
          Community
        </p>
        <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">
          Weather Forecast
        </p>
        <button
          className="bg-[#216206] text-white px-6 py-2 text-sm font-semibold hover:bg-[#133A04]"
          onClick={() => navigate.push("/signUp")}
        >
          Sign Up
        </button>
      </div>
      <Close setOpenMenu={setOpenMenu}/>
    </div>
  );
}
