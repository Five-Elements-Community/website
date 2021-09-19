import React from 'react';

const CardComponent = ({ children }) => (
  <div
    className={`
    p-12
    m-5
    rounded-lg 
    border 
    border-solid
    hover:bg-air
    hover:text-white
    hover:shadow-lg
    hover:border-transparent
    cursor-wait
    border-gray-200`}
  >
    {children}
  </div>
);

export default CardComponent;
