import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [acive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="bg-indigo-800">
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between">
        <div className="flex space-x-12">
          <div>
            <a href="#" className="flex items-center py-5 px-3 text-indigo-200 hover:text-indigo-50">
            <svg className="h-8 w-8 mr-1" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
</svg>
<span className="font-semibold text-lg">R&middot;T&middot;W&middot;G</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-5 px-3 font-black tracking-widest text-indigo-200 hover:text-indigo-50 hover:underline">Home</a>
            <a href="#" className="py-5 px-3 font-black tracking-widest text-indigo-200 hover:text-indigo-50 hover:underline">R.O.P.E.™</a>
            <a href="#" className="py-5 px-3 font-black tracking-widest text-indigo-200 hover:text-indigo-50 hover:underline">How I Work</a>
            <a href="#" className="py-5 px-3 font-black tracking-widest text-indigo-200 hover:text-indigo-50 hover:underline">Blog</a>
            <a href="#" className="py-5 px-3 font-black tracking-widest text-indigo-200 hover:text-indigo-50 hover:underline">About</a>
          </div>
        </div>

        <div className="hidden md:flex items-center">
          <a href="#" className="py-3 px-3 font-semibold bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 transition duration-300 rounded shadow-md">Book Roadmap Session</a>
        </div>

        {/* mobile button goes here */}
        <div className="md:hidden flex items-center">
          <button className="mobile-menu-button">
            <svg className="w-7 h-7 text-indigo-100 hover:text-indigo-50 mr-8" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
          </button>
        </div>

      </div>
    </div>
    
    {/* mobile menu */}
    <div className={`${
      active ? '' : 'hidden'
    } w-full lg:inline-flex lg:flex-grow ls:ml-auto`}>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">Home</a>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">R.O.P.E.™</a>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">How I Work</a>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">Blog</a>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">About</a>
      <a href="#" className="block py-2 px-3 text-sm text-indigo-100 hover:text-indigo-800 hover:bg-indigo-200">Book Roadmap Session</a>
    </div>

  </nav>
  )
};