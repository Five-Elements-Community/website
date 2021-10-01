import React from 'react';

const CardComponent: React.FunctionComponent = ({ children }) => (
  <div className={`cursor-pointer`}>
    <div className="border-1 rounded-lg shadow-lg text-center p-10">{children}</div>
  </div>
);

export default CardComponent;
