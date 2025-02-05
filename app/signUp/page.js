'use client'
import React from "react";
import { google } from "../icons";
import { useRouter } from "next/navigation";

export default function page() {

   const navigate = useRouter()

  return (
    <div className="w-full h-full flex">
      <div className="w-[43%] h-full bg-[url(/AgrowiseSignUpImage.png)] bg-no-repeat bg-cover bg-center rounded-ee-3xl rounded-se-3xl"></div>
      <div className="grow flex flex-col gap-6 px-24 py-12 items-center overflow-auto">
        <h2 className="font-bold text-2xl mt-8">Get Started Now</h2>
        <form className="w-full px-10 py-4">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <label htmlFor="name"
              className="font-medium"
              >Name</label>
              <input
                id="name"
                className="w-full h-14 p-4 rounded-lg border"
                placeholder="Enter your name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="email"
              className="font-medium"
              >Email</label>
              <input
                id="email"
                className="w-full h-14 p-4 rounded-lg border"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full">
              <label htmlFor="password"
              className="font-medium"
              >Password</label>
              <input
                id="password"
                className="w-full h-14 p-4 rounded-lg border"
                placeholder="Enter your Password"
              />
            </div>
            <div className="w-full">
              <label htmlFor="confirm-password"
              className="font-medium"
              >Confirm Password</label>
              <input
                id="confirm-password"
                className="w-full h-14 p-4 rounded-lg border"
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
              className="w-full rounded-lg h-14 mt-2 text-white bg-[#216206] font-medium py-4"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="w-full px-10 py-1 flex flex-col gap-6 items-center">
          <p className="font-bold">OR</p>
          <button
            className="w-full rounded-lg border font-medium py-4 flex justify-center items-center h-14 gap-2"
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
