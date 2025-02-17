import Image from 'next/image'
import React from 'react'
import Hamburger from './icons/Hamburger'

export default function MobileNav({setOpenMenu}) {
  return (
    <nav className="md:hidden w-full px-6 py-4 flex justify-between drop-shadow-md bg-white">
      <Image
        src={"/logo.png"}
        alt="agro wise logo"
        height={46.22}
        width={157.22}
        className="w-20 "
      />
      <Hamburger setOpenMenu={setOpenMenu}/>
    </nav>
  );
}
