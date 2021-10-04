import Logo from "./Logo";
import Hamburger from "./Hamburger";
import Jagged from "./Jagged";

import { useState } from "react";

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
            <Logo className="w-8 h-8 text-indigo-100" />
            <span className="font-semibold text-lg text-indigo-100">
              R&middot;T&middot;W&middot;G
            </span>
          </a>
          <p className="font-semibold text-lg text-indigo-100">Content Marketing Consulting for Innovative Tech Companies</p>
        </div>
      </div>
    </div>
    
  );
}
