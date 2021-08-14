import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-indigo-800 p-3 lg:mb-20'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 text-indigo-200 hover:text-indigo-50'>
          <svg className="h-8 w-8 mr-2" xmlns="http://www.w3.org/200/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
</svg>
<span className="font-semibold text-lg">R&middot;T&middot;W&middot;G</span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 lg:hidden ml-auto text-indigo-200 hover:text-indigo-50 outline-none'
          onClick={handleClick}
        >
          <svg className="w-7 h-7 text-indigo-100 hover:text-indigo-50 mr-8" xmlns="http://www.w3.org/200/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
</svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:items-center flex flex-col lg:h-auto border-2 border-red-700 md:flex md:justify-between'>
            <div className="bg-yellow-400">
            <Link href='/rope'>
              <a className='lg:inline-flex px-3 py-2 mt-2 ml-20 text-2xl lg:text-base text-indigo-200 font-bold items-center justify-center hover:text-indigo-50 hover:underline'>
                R.O.P.E.™
              </a>
            </Link>
            <Link href='/how-i-work'>
              <a className='lg:inline-flex px-3 py-2 mt-2 ml-20 text-2xl lg:text-base text-indigo-200 font-bold items-center justify-center hover:text-indigo-50 hover:underline'>
                How I Work
              </a>
            </Link>
            <Link href='/blog'>
              <a className='lg:inline-flex px-3 py-2 mt-2 ml-20 text-2xl lg:text-base text-indigo-200 font-bold items-center justify-center hover:text-indigo-50 hover:underline'>
                Blog
              </a>
            </Link>
            <Link href='/about'>
              <a className='lg:inline-flex px-3 py-2 mt-2 ml-20 text-2xl lg:text-base text-indigo-200 font-bold items-center justify-center hover:text-indigo-50 hover:underline'>
                About
              </a>
            </Link>
            </div>
            <div className="bg-green-500 md:flex">
            <Link href='/roadmap'>
              <a className='lg:inline-flex lg:w-auto w-full md:w-auto px-3 py-2 mt-8 lg:mr-20 lg:mt-0 text-center text-2xl lg:text-base rounded bg-yellow-400 text-yellow-900 font-bold items-center justify-center hover:text-yellow-800 hover:bg-yellow-300'>
                Book Roadmap Session
              </a>
            </Link>
            <p className="hidden">{/* removed lg:ml-80 */} from the Book Roadmap Session 'a' tag</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};