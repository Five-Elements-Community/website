import LogoComponent from '../helper/LogoComponent';
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderComponent: React.FunctionComponent = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);

  return (
    <header className="sticky top-0 z-10 py-3 bg-black text-token">
      <nav className="container mx-auto flex flex-wrap items-center justify-between text-xl ">
        <div className="">
          <LogoComponent />
        </div>
        <svg
          xmlns="<http://www.w3.org/2000/svg>"
          onClick={() => setMenuHidden(!isMenuHidden)}
          className="h-6 w-6 cursor-pointer md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <div className={`w-full md:flex md:w-auto ${isMenuHidden ? 'hidden' : ''}`}>
          <ul className="text-xl md:flex md:space-x-8 space-y-2 md:space-y-0 md:py-0 text-center">
            <li>
              <AnchorLink className="hover:underline" href="#intro">
                Introduction
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="hover:underline" href="#gettoken">
                Buy
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="hover:underline" href="#ecosystem">
                Ecosystem
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="hover:underline" href="#community">
                Community
              </AnchorLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
