import React from 'react';
import Card from '../card/CardComponent';

const GetTokenComponent: React.FunctionComponent = () => (
  <div className="bg-nice-gray">
    <div className="container mx-auto py-12 text-white">
      <h1 className="font-semibold text-center my-10 text-4xl sm:text-5xl text-token">Get Five Elements Token</h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <Card>
          <p className="font-bold text-xl">Sundae swap</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">Rainy day swap</p>
          <p>Umbrella needed</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">Hot day swap</p>
          <p>Suncreme needed</p>
        </Card>
        <Card>
          <p className="font-bold text-xl">Cloudy day swap</p>
          <p>Maybe rain</p>
        </Card>
      </div>
    </div>
  </div>
);

export default GetTokenComponent;
