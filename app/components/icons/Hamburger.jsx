import React from 'react'

export default function Hamburger({setOpenMenu}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      onClick={()=>setOpenMenu(true)}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
      />
    </svg>
  );
}
