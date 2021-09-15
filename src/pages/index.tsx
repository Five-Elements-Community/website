import React from 'react';
import Buy from '../components/Buy';
import EcoSystem from '../components/EcoSystem';
import Introduction from '../components/Introduction';
import Layout from '../components/layout/Layout';

const IndexPage = () => (
  <Layout>
    <section id="intro" className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <Introduction/>
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
