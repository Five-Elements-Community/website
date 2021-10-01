import React from 'react';
import Card from '../card/CardComponent';
import './getToken.scss';

const GetTokenComponent: React.FunctionComponent = () => (
  <div className="container mx-auto p-12">
    <h1 className="text-5xl font-semibold text-center m-10">Get five elements token</h1>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
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
);

export default GetTokenComponent;
