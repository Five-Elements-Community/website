import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const HeaderComponent: React.FunctionComponent = () => (
  <header className="sticky top-0 shadow bg-black text-white">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">Five Elements Token</div>
      <div className="flex mt-4 sm:mt-0 ">
        <AnchorLink className="px-4 hover:underline" href="#intro">
          Introduction
        </AnchorLink>
        <AnchorLink className="px-4 hover:underline" href="#gettoken">
          Get token
        </AnchorLink>
        <AnchorLink className="px-4 hover:underline" href="#ecosystem">
          Ecosystem
        </AnchorLink>
        <AnchorLink className="px-4 hover:underline" href="#community">
          Community
        </AnchorLink>
      </div>
    </div>
  </header>
);

export default HeaderComponent;
