import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderComponent: React.FunctionComponent = () => {
  const [isMenuHidden, setMenuHidden] = useState(false);

  return (
    <header className="sticky top-0">
      <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-white bg-black">
        <div className="text-2xl">Five Elements Token</div>
        <svg xmlns="<http://www.w3.org/2000/svg>" 
              onClick={() => setMenuHidden(!isMenuHidden)}
              className="h-6 w-6 cursor-pointer md:hidden block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
          </svg>
          <div className={`${isMenuHidden ? "hidden" : ""} w-full md:flex md:items-center md:justify-between md:w-auto`}>
            <ul className="text-base pt-4 md:flex md:justify-between md:pt-0 text-center">
              <li>
                <AnchorLink className="md:p-4 py-2 block hover:underline" href="#intro">
                  Introduction
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="md:p-4 py-2 block hover:underline" href="#gettoken">
                Get token
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="md:p-4 py-2 block hover:underline" href="#ecosystem">
                Ecosystem
                </AnchorLink>
              </li>
              <li>
                <AnchorLink className="md:p-4 py-2 block hover:underline" href="#community">
                Community
                </AnchorLink>
              </li>
            </ul>
          </div>
      </nav>
    </header>
)};

export default HeaderComponent;
