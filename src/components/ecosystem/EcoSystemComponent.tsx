import React from 'react';
import Card from '../card/CardComponent';

const EcoSystemComponent: React.FunctionComponent = () => (
  <div className="container text-center">
    <h2 className="lg:text-5xl font-semibold">Ecosystem</h2>
    <div className="flex items-center">
      <Card>
        <p className="font-semibold text-xl">Burn</p>
        <p className="mt-4">This will be handled by the element fire.</p>
      </Card>
      <Card>
        <p className="font-semibold text-xl">Reflections</p>
        <p className="mt-4">This will be handled by the element water.</p>
      </Card>
      <Card>
        <p className="font-semibold text-xl">NFTs</p>
        <p className="mt-4">This will be hanlded by the element air.</p>
      </Card>
      <Card>
        <p className="font-semibold text-xl">Staking</p>
        <p className="mt-4">This will be handled by the element metal.</p>
      </Card>
    </div>
  </div>
);

export default EcoSystemComponent;
