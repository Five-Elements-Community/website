import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => (
  <header className="sticky top-0 shadow bg-water bg-opacity-95">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">       
        Five Elements
      </div>
      <div className="flex mt-4 sm:mt-0">
        <AnchorLink className="px-4" href="#intro">
          Introduction
        </AnchorLink>        
        <AnchorLink className="px-4" href="#buy">
          Buy
        </AnchorLink>
        <AnchorLink className="px-4" href="#ecosystem">
          Ecosystem
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default Header;
