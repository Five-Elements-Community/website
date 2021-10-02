import React from 'react';
import './introduction.scss';
import Orb from '../orb/OrbComponent';

const IntroductionComponent: React.FunctionComponent = () => (
  <div className="bg-black">
    <div className="container mx-auto flex overflow-hidden justify-center items-center h-screen px-10">
      <Orb />
      <div className="text-white">
        <h1 className="text-5xl font-semibold">
          The five elements <br />
          cardano token!
        </h1>
        <p>
          Welcome to the five elements token, it is created by five friends which characters reflect five elements.
          <br />A community driven token with limitless potential.
        </p>
      </div>
    </div>
  </div>
);

export default IntroductionComponent;
