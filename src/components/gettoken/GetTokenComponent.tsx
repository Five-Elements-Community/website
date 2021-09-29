import React from 'react';
import Card from '../card/CardComponent';
import './getToken.scss'

const GetTokenComponent: React.FunctionComponent = () => (
  <div className="container text-center ">
    <h2 className="lg:text-5xl font-semibold">Get five elements token</h2>
    <div className="flex items-center">
      <Card>
        <img className="w-full" src="" alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Sundae swap</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          </p>
        </div>
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
