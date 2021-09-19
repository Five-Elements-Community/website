import React from 'react';

const OrbComponent: React.FC = () => {  

  const particles = []
  for (var i = 0; i <= 500; i++) {
    particles.push(
      <div className="particle"/>
    )
  }
  
  return(  
  <div className="flex orb"> { particles } </div>
  )
};

export default OrbComponent;
