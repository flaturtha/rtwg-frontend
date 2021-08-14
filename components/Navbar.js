import Link from 'next/link';
import Logo from '../components/Logo'

import { useState } from 'react';
import Hamburger from './Hamburger';

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
          <Logo className="w-8 h-8" /><span className="font-semibold text-lg">R&middot;T&middot;W&middot;G</span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 lg:hidden ml-auto text-indigo-200 hover:text-indigo-50 outline-none'
          onClick={handleClick}
        >
          <Hamburger className="w-8 h-8" />
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