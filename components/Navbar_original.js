import Logo from './Logo'
import Hamburger from './Hamburger'
import Jagged from './Jagged'

import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-indigo-800 sticky top-0 z-50 shadow-xl">
              {/* <Jagged /> */}
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between z-50">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <Logo className="w-8 h-8 text-indigo-100" /><span className="font-semibold text-lg text-indigo-100">R&middot;T&middot;W&middot;G</span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li className="hidden">
              <a
                href="/rope"
                aria-label="Rope Method"
                title="Rope Method"
                className="font-black tracking-wide text-indigo-100 transition-colors duration-200 hover:underline hover:text-white active:underline"
              >
                R.O.P.E.™
              </a>
            </li>
            <li>
              <a
                href="/how-i-work"
                aria-label="How I Work"
                title="How I Work"
                className="font-black tracking-wide text-indigo-100 transition-colors duration-200 hover:underline hover:text-white active:underline"
              >
                How I Work
              </a>
            </li>
            <li>
              <a
                href="/about"
                aria-label="About"
                title="About"
                className="font-black tracking-wide text-indigo-100 transition-colors duration-200 hover:underline hover:text-white active:underline"
              >
                About
              </a>
            </li>            
            <li>
              <a
                href="/resources"
                aria-label="resources"
                title="resources"
                className="font-black tracking-wide text-indigo-100 transition-colors duration-200 hover:underline hover:text-white active:underline"
              >
                Resources
              </a>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <a
                href="/roadmap"
                className="inline-flex items-center justify-center h-12 px-6 font-black tracking-wide text-yellow-900 hover:text-yellow-800 font-bold transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none"
                aria-label="Book Roadmap Session"
                title="Book Roadmap Session"
              >
                Book Roadmap Session
              </a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <Hamburger className="w-8 h-8 text-indigo-100 hover:text-white" />

            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <Logo className="w-8 h-8 text-indigo-100" /><span className="font-semibold text-xl text-indigo-100">R&middot;T&middot;W&middot;G</span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/rope"
                          aria-label="Rope Method"
                          title="Rope Method"
                          className="font-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          R.O.P.E.™
                        </a>
                      </li>
                      <li>
                        <a
                          href="/how-i-work"
                          aria-label="How I Work"
                          title="How I Work"
                          className="font-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          How I Work
                        </a>
                      </li>
                      <li>
                        <a
                          href="/resources"
                          aria-label="resources"
                          title="resources"
                          className="font-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Resources
                        </a>
                      </li>
                      <li>
                        <a
                          href="/about"
                          aria-label="About"
                          title="About"
                          className="font-black tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="/roadmap"
                          className="inline-flex items-center justify-center w-full h-12 mt-6 px-6 font-black tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Book Roadmap Session"
                          title="Book Roadmap Session"
                        >
                          Book Roadmap Session
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};