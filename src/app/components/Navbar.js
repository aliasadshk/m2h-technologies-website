/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center px-6 py-4 bg-[#1B112B] text-white shadow-md fixed w-full z-50">
    <Link href="/" className="flex items-center">
    <img
  src="logs.png"
  alt="M2H Technologies Logo"
  className="h-12 w-auto mr-2 opacity-100" // opacity set to 50%
 />

      <div className="text-2xl font-bold text-lime-400">M2H Technologies</div>
    </Link>
    <ul className="hidden md:flex space-x-6 text-sm font-medium font-eudoxus">
  {/* list items here */}

      <li><a href="#"><b>Home</b></a></li>
      <li><a href="#services"><b>Services</b></a></li>
      <li><a href="#about"><b>About us</b></a></li>
      <li><a href="#pricing"><b>Pricing</b></a></li>
      {/* <li><a href="#blog">Blog</a></li> */}
      <li><a href="#consultation"><b>Contact</b></a></li>
    </ul>
    <a
      href="#consultation"
      className="bg-lime-400 text-black font-semibold px-4 py-2 rounded-md text-sm"
    >
      Free Discovery Call
    </a>
  </nav>
);

export default Navbar;
