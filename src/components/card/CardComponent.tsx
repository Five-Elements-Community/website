import React from 'react';
import './card.scss';

const CardComponent: React.FunctionComponent = ({ children }) => (
  <div
    className={`border-2 border-transparent sm:rounded-lg sm:hover:border-token md:hover:shadow-lg
      transition duration-500 ease-in-out md:opacity-50
      transform md:hover:scale-125 md:hover:-translate-y-2 md:hover:opacity-100 md:skew-y-3 md:hover:skew-y-0
      card cursor-pointer p-6 md:p-3 md:m-3 text-center bg-card-background
    `}
  >
    <div className="content">{children}</div>
  </div>
);

export default CardComponent;
