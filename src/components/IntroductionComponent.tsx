import React from 'react';
import Orb from './OrbComponent';

const IntroductionComponent = () => (
  <div className="intro-background justify-center items-center flex h-screen">  
    <Orb/>
    <div className="flex-column text-white">
      <h1 className="lg:text-5xl font-semibold">
        The five elements <br/>cardano token.
      </h1>       
      <p>       
        Welcome to the five elements token, it is created by five friends which characters reflect five elements.<br/>
        A community driven token with limitless potential.
      </p>  
    </div>
  </div>
);

export default IntroductionComponent;
