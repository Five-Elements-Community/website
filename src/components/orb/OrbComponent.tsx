import React from 'react';
import './orb.scss'

const OrbComponent: React.FunctionComponent = () => {
  const particles = [];
  for (let i = 0; i <= 500; i++) {
    particles.push(<div className="particle" />);
  }
  return <div className="flex orb"> {particles} </div>;
};

export default OrbComponent;
