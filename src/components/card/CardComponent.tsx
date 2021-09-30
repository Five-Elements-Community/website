import React from 'react';

const CardComponent: React.FunctionComponent = ({ children }) => (
  <div className={`my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 cursor-pointer`} >
    <div className="overflow-hidden border-1 rounded-lg shadow-lg p-5 text-center">
      {children}
    </div>
  </div>
);

export default CardComponent;
