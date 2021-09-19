import React from 'react';
import Card from './CardComponent';

const BuyComponent = () => (
  <div className="container mx-auto text-center">
  <h2 className="text-3xl lg:text-5xl font-semibold">Buy five elements token</h2>
  <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">Cardano swap 0</p>
          <p className="mt-4">
          Cardano swap 0
          </p>
        </Card>
      </div>
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">Cardano swap 1</p>
          <p className="mt-4">
            Cardano swap 1
          </p>
        </Card>
      </div>
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">Cardano swap 2</p>
          <p className="mt-4">
            Cardano swap 2
          </p>
        </Card>
      </div>
      <div className="flex-1 px-3">
        <Card className="mb-8">
          <p className="font-semibold text-xl">Binance :D</p>
          <p className="mt-4">
            Here is the link to binance.
          </p>
        </Card>
      </div>
    </div>
</div>
);

export default BuyComponent;
