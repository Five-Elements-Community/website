import React from 'react';
import Card from '../card/CardComponent';
import './getToken.scss'

const GetTokenComponent: React.FunctionComponent = () => (
  <div className="my-12 px-4 md:px-12">
    <h1 className="text-5xl font-semibold text-center my-12">Get five elements token</h1>
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
      <Card>
        <img className="" src="" alt="" />
        <div>
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
