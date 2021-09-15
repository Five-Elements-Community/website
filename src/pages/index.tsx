import React from 'react';
import Buy from '../components/Buy';
import EcoSystem from '../components/EcoSystem';
import Introduction from '../components/Introduction';
import Layout from '../components/layout/Layout';

const IndexPage = () => (
  <Layout>
    <section id="intro" >      
      <Introduction/>
    </section>
    <section id="buy" >    
      <Buy/>                      
    </section>
    <section id="ecosystem" >          
      <EcoSystem/>     
    </section>
  </Layout>  
);

export default IndexPage;
