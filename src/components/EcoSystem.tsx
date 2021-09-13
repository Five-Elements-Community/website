import React from 'react';
import Card from './Card';

const EcoSystem = () => (  
    <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-semibold">Ecosystem</h2>
      <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Burn</p>
              <p className="mt-4">
                This will be handled by the element fire.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Reflections</p>
              <p className="mt-4">
                This will be handled by the element water.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">NFTs</p>
              <p className="mt-4">
                This will be hanlded by the element air.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Staking</p>
              <p className="mt-4">
                This will be handled by the element metal.
              </p>
            </Card>
          </div>
        </div>
    </div>
);

export default EcoSystem;
