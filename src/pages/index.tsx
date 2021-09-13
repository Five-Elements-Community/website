import React from 'react';
import Buy from '../components/Buy';
import EcoSystem from '../components/EcoSystem';
import Introduction from '../components/Introduction';
import Layout from '../components/layout/Layout';

const IndexPage = () => (
  <Layout>
    <section id="intro" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">          
          <p className="text-xl lg:text-2xl mt-6 font-light">
            <Introduction/>
          </p>
        </div>        
      </div>
    </section>
    <section id="buy" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">       
        <Buy/>                
      </div>
    </section>
    <section id="ecosystem" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">        
        <EcoSystem/>
      </div>
    </section>
  </Layout>  
);

export default IndexPage;
