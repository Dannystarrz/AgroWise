'use client'
import Image from "next/image";
import { certified, facebookIcon, instagramIcon, solutions, support, twitterIcon, youtubeIcon } from "./icons";
import { useRouter } from "next/navigation";
import MobileNav from "./components/MobileNav";
import MenuContent from "./components/MenuContent";
import { useState } from "react";

export default function Home() {

  const navigate = useRouter()

  const [openMenu, setOpenMenu]= useState(false)

  return (
    <div className="max-w-screen min-h-screen">

      <nav className="flex max-md:hidden w-full justify-between items-center px-24 py-5 drop-shadow-md bg-white">
        <Image src={'/logo.png'} alt="agro wise logo" height={46.22} width={157.22}/>

        <div className="flex gap-14 items-center text-base">
          <p className="text-[#FF9800] font-bold border-b cursor-pointer border-[#FF9800]">Home</p>
          <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">Crop management</p>
          <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">Market Insights</p>
          <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">Community</p>
          <p className="hover:text-[#FF9800] cursor-pointer hover:border-b hover:border-[#FF9800]">Weather Forecast</p>
          <button className="bg-[#216206] text-white px-10 py-4 font-semibold hover:bg-[#133A04]"
          onClick={()=>navigate.push('/signUp')}
          >Sign Up</button>
        </div>
      </nav>
      <MobileNav setOpenMenu={setOpenMenu}/>

      <section className="w-full md:h-[85.7vh] h-fit md:py-6 py-3 max-md:px-6">

        <div className="w-full md:h-full relative md:flex max-md:py-14 flex-col max-md:mb-10 md:gap-[4rem]">
        <Image src={'/rightFarmImage.png'} alt="farm clip image on the right" width={324} height={338}
          className="md:absolute top-0 max-md:hidden md:right-8 right-0 md:w-[240px] w-full  md:h-[214px] h-[210px] z-20"
          />
         
         

          <h1 className="md:text-7xl text-3xl md:ml-[17.75rem] max-md:text-center font-bold md:mt-8">Welcome To AgroWise</h1>

          <div className="flex flex-col gap-[1.2rem] w-full z-30">
            <p className="md:text-2xl text-xl text-[#5A5F59] md:w-[48%] max-md:text-justify max-md:py-10 md:ml-[31.25rem]"> A dynamic platform dedicated to ensuring that every farmer is equipped with the knowledge needed to thrive in the ever-evolving agricultural sector.</p>

            <div className="flex max-md:flex-col max-md:w-full gap-4 md:ml-[48rem]">
              <button className="border-2 border-[#216206] hover:bg-[#BBDCAD] text-lg text-[#216206] md:w-48 w-full py-4 font-semibold rounded-lg"
              onClick={()=>navigate.push('/signUp')}
              >Get Started</button>
              <button className="bg-[#216206] text-white md:w-48 w-full text-lg py-4 font-semibold hover:bg-[#133A04] rounded-lg"
              onClick={()=>navigate.push('/login')}
              >Login</button>
            </div>

          </div>

          <Image src={'/leftFarmImage.png'} alt="farm clip image on the left" width={1340} height={844}
          className="md:absolute top-0 max-md:hidden md:bottom-8 bottom-0 left-8 md:h-full md:w-[95%] z-20"
          />
        </div>
       
      </section>

      <section className="flex max-md:flex-col md:px-32 px-6 md:gap-8 gap-4 md:mt-8 mt-4 items-center">
        <div className="md:w-[58%] w-full flex flex-col md:gap-10 gap-5">

          <h2 className="md:text-5xl text-3xl text-[#216206] text-bold">Our Mission</h2>

          <div className="flex flex-col gap-4 text-justify max-md:w-full">

            <p className="w-full">
            Is to revolutionize the agricultural sector by empowering farmers with cutting-edge technology. We are dedicated to developing a sophisticated website that harnesses the power of artificial intelligence (AI) to provide farmers with unparalleled support in making informed decisions.
            </p>
            <p>
            Our commitment is to create a platform that goes beyond conventional tools, offering farmers expert advice on crop management, market insights, and real-time problem-solving. 
            </p>

          </div>

          <div className="flex flex-col gap-4 w-full mt-2">

            <div className="flex max-md:flex-col w-full md:gap-10 gap-4">

              <div className="flex items-center gap-4">
                {solutions}
                <p className="font-normal text-xl">AI Farm solutions</p>
              </div>
              
              <div className="flex items-center gap-4">
                {certified}
                <p className="font-normal text-xl">Certified products</p>
              </div>
            </div>
              
            <div className="flex items-center gap-4">
              {support}
              <p className="font-normal text-xl">Support 24/7</p>
            </div>

          </div>

        </div>

        <div className="grow flex flex-col gap-6">
          <Image src={'/first mission image.png'} alt="farmer image" width={445} height={291}/>
          <div className="flex w-full justify-between max-md:gap-6">
            <Image src={'/second mission image.png'} alt="farmer image 2" width={208} height={208}/>
            <Image src={'/thirdImage.png'} alt="farmer image 3" width={208} height={208}/>
          </div>
        </div>

      </section>

      <footer className="bg-[#F9FEF6] w-full md:mt-16 mt-8 items-center flex flex-col md:gap-16 gap-8 md:px-32 px-6 md:pt-16 pt-6">
        <div className="flex max-md:flex-col max-md:gap-4 justify-between w-full">
          <Image src={'/logo.png'} alt="agro wise logo" height={46.22} width={157.22} className="w-[157.22px] h-[46.22px]"/>

          <div className="flex max-md:flex-col md:gap-16 gap-8">
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold mb-2">Quick links</p>
              <p className="font-light text-sm">
                Home
              </p>
              <p className="font-light text-sm">
               Crop
              </p>
              <p className="font-light text-sm">
                Management
              </p>
              <p className="font-light text-sm">
                Market Insights
              </p>
              <p className="font-light text-sm">
                Community Forum
              </p>
              <p className="font-light text-sm">
                Weather forecast
              </p>
              <p className="font-light text-sm">
                News
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold mb-2">Product Listings</p>
              <p className="font-light text-sm">
                Tomatoes
              </p>
              <p className="font-light text-sm">
                Mangoes
              </p>
              <p className="font-light text-sm">
                Red cheries
              </p>
              <p className="font-light text-sm">
                Banana
              </p>
              <p className="font-light text-sm">
                Carrots
              </p>
             
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold mb-2">Contact Us</p>
              <p className="font-light text-sm">
                Chatbox
              </p>
              <p className="font-light text-sm">
                Business inquiry: <span className="font-medium">080-459-876-7890</span>
              </p>
              <p className="font-light text-sm">
                Customer care: <span className="font-medium">080-459-876-7890</span>
              </p>
             
            </div>

           
            <div className="flex flex-col gap-3">
              <p className="text-base font-bold">Social</p>
              <div className="flex gap-4 items-center">
                {facebookIcon} {instagramIcon} {twitterIcon} {youtubeIcon}
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:w-4/5 w-full border-t py-5 border-[#0D0D0D] items-center justify-center">

          <p className="font-light text-sm">
            © 2023 AgroWise | All Rights Reserved
          </p>

          
        </div>
      </footer>
      {openMenu&&<MenuContent setOpenMenu={setOpenMenu}/>}
    </div>
  );
}
