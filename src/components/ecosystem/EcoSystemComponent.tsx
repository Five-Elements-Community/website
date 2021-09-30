import React from 'react';
import Card from '../card/CardComponent';

const EcoSystemComponent: React.FunctionComponent = () => (
  <div className="container">
    <h1 className="text-5xl font-semibold text-center my-12">Ecosystem</h1>
    <div className="flex flex-wrap">
      <Card>
        <p className="font-semibold">Burn</p>
        <p>This will be handled by the element fire.</p>
      </Card>
      <Card>
        <p className="font-semibold">Reflections</p>
        <p >This will be handled by the element water.</p>
      </Card>
      <Card>
        <p className="font-semibold">NFTs</p>
        <p>This will be hanlded by the element air.</p>
      </Card>
      <Card>
        <p className="font-semibold">Staking</p>
        <p>This will be handled by the element metal.</p>
      </Card>
    </div>
  </div>
);

export default EcoSystemComponent;
