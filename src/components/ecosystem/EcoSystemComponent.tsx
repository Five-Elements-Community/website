import React from 'react';
import Card from '../card/CardComponent';
import './ecosystem.scss';

const EcoSystemComponent: React.FunctionComponent = () => (
  <div className="ecoBackground"> 
    <div className="container mx-auto p-12 text-white">
      <h1 className="font-semibold text-center my-10 text-4xl sm:text-5xl">Ecosystem</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">        
        <Card cardClass="cardBurnBackround" layerClass="layerBurnBackground">            
            <p>Burn</p>
            <p>This will be handled by the element fire.</p>           
        </Card>
        <Card cardClass="cardReflectionBackround" layerClass="layerReflectionBackground">            
            <p>Reflections</p>
            <p>This will be handled by the element water.</p>           
        </Card> 
        <Card cardClass="cardNftBackround" layerClass="layerNftBackground">            
            <p>NFTs</p>
            <p>This will be handled by the element air.</p>            
        </Card>    
        <Card cardClass="cardStackingBackround" layerClass="layerStackingBackground">
            <p>Staking</p>
            <p>This will be handled by the element metal.</p>            
        </Card>
      </div>
    </div>
  </div>
);

export default EcoSystemComponent;
