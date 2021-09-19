import React from 'react';
import Buy from '../components/BuyComponent';
import CommunityComponent from '../components/CommunityComponent';
import EcoSystem from '../components/EcoSystemComponent';
import Introduction from '../components/IntroductionComponent';
import Layout from '../components/layout/LayoutComponent';

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
    <section id="community" >
      <CommunityComponent/>
    </section>
  </Layout>  
);

export default IndexPage;
