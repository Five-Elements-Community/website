import React from 'react';
import Card from '../card/CardComponent';

const GetTokenComponent = () => (
  <div className="container text-center ">
  <h2 className="lg:text-5xl font-semibold">Get five elements token</h2>
    <div className="flex items-center">      
      <Card>
        <p className="font-semibold text-xl">Sunday swap</p>
        <p className="mt-4">Rest needed</p>
      </Card>
      <Card>
        <p className="font-semibold text-xl">Rainy day swap</p>
        <p className="mt-4">Umbrella needed</p>
      </Card>  
      <Card>
        <p className="font-semibold text-xl">Hot day swap</p>
        <p className="mt-4">Suncreme needed</p>
      </Card>
      <Card>
        <p className="font-semibold text-xl">Cloudy day swap</p>
        <p className="mt-4">Maybe rain</p>
      </Card>
    </div>
  </div>
);

export default GetTokenComponent;
