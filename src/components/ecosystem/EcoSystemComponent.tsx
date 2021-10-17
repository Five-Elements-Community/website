import React from 'react';
import Card from '../card/CardComponent';

const EcoSystemComponent: React.FunctionComponent = () => (
  <div className="bg-nice-black">
    <div className="container mx-auto py-12 text-white">
      <h1 className="font-semibold text-center my-10 text-4xl sm:text-5xl text-token">Ecosystem</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <Card>
          <p className="font-bold text-xl">Burn</p>
          <p>This will be handled by the element fire.</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">Reflections</p>
          <p>This will be handled by the element water.</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">NFTs</p>
          <p>This will be handled by the element air.</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">Staking</p>
          <p>This will be handled by the element metal.</p>
        </Card>
      </div>
    </div>
  </div>
);

export default EcoSystemComponent;
