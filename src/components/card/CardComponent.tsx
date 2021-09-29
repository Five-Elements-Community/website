import React from 'react';

const CardComponent: React.FunctionComponent = ({ children }) => (
  <div className={`max-w-sm rounded overflow-hidden shadow-lg cursor-pointer`} >
    {children}
  </div>
);

export default CardComponent;
