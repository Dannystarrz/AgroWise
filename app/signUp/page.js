'use client'
import React from "react";
import { google } from "../icons";
import { useRouter } from "next/navigation";

export default function page() {

   const navigate = useRouter()

  return (
    <div className="w-full h-full flex">
      <div className="w-[43%] max-md:hidden h-full bg-[url(/AgrowiseSignUpImage.png)] bg-no-repeat bg-cover bg-center rounded-ee-3xl rounded-se-3xl"></div>
      <div className="grow flex flex-col gap-6 md:px-24 px-6 md:py-12 py-8 items-center overflow-auto">
        <h2 className="font-bold md:text-2xl text-xl md:mt-8 mt-16">Get Started Now</h2>
        <form className="w-full md:px-10 py-4">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name"
              className="font-medium"
              >Name</label>
              <input
                id="name"
                className="w-full md:h-14 h-12 p-4 rounded-lg border"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email"
              className="font-medium"
              >Email</label>
              <input
                id="email"
                className="w-full md:h-14 h-12 p-4 rounded-lg border"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password"
              className="font-medium"
              >Password</label>
              <input
                id="password"
                className="w-full md:h-14 h-12 p-4 rounded-lg border"
                placeholder="Enter your Password"
              />
            </div>
            <div className="w-full">
              <label htmlFor="confirm-password"
              className="font-medium"
              >Confirm Password</label>
              <input
                id="confirm-password"
                className="w-full md:h-14 h-12 p-4 rounded-lg border"
                placeholder="Confirm your Password"
              />
            </div>
            <div className="flex gap-3 items-center">
              <input type="checkbox" className="h-6 w-6 rounded" />
              <p>
                I agree to the
                <span className="font-bold underline ml-1">terms & policy</span>
              </p>
            </div>
            <button
              className="w-full rounded-lg md:h-14 h-12 mt-2 text-white bg-[#216206] font-medium flex items-center justify-center max-md:text-sm"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="w-full md:px-10 py-1 flex flex-col gap-6 items-center">
          <p className="font-bold">OR</p>
          <button
            className="w-full rounded-lg border font-medium py-4 flex justify-center items-center md:h-14 h-12 gap-2"
          >
            {google}
            <p className="text-black">Sign Up with Google</p>
          </button>
          <p className="font-semibold">
          Already have an account? 
          <span className="text-[#FF9800] ml-1"
          onClick={()=>navigate.push('/login')}
          >Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
