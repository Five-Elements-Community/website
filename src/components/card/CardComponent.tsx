import React from 'react';
import './card.scss';

type CardProps = {
  cardClass:string;
  layerClass:string;  
}

const CardComponent: React.FunctionComponent<CardProps> = ({ cardClass, layerClass, children }) => (
  <div className={`card cursor-pointer ${cardClass}`}>
    <div className={`layer ${layerClass}`}></div>
    <div className="content">
      {children}
    </div>    
  </div>
);

export default CardComponent;
