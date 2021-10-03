import React from 'react';
import Orb from '../orb/OrbComponent';

const IntroductionComponent: React.FunctionComponent = () => (
  <div className="bg-black">
    <div className="container mx-auto flex overflow-hidden justify-center items-center h-screen">
      <Orb />
      <div className="text-white">
        <h1 className="text-4xl sm:text-5xl font-semibold mb-10 text-center">Five Elements Token</h1>
        <p className="text-center">
          Welcome to the Five Elements Token, a community driven token on the cardano blockchain.
          <br />
          The idea was created by five friends which characters reflect five elements.
        </p>
      </div>
    </div>
  </div>
);

export default IntroductionComponent;
