import React from 'react';
import GetTokenComponent from '../components/GetTokenComponent';
import CommunityComponent from '../components/CommunityComponent';
import EcoSystem from '../components/EcoSystemComponent';
import Introduction from '../components/IntroductionComponent';
import Layout from '../components/layout/LayoutComponent';

const IndexPage = () => (
  <Layout>
    <section id="intro" >      
      <Introduction/>
    </section>
    <section id="gettoken" className="p-20 bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500">    
      <GetTokenComponent/>                      
    </section>   
    <section id="ecosystem" className="p-20 bg-gradient-to-b from-yellow-400 via-red-500 to-pink-500">          
      <EcoSystem/>     
    </section>
    <section id="community" className="p-20 bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500">
      <CommunityComponent/>
    </section>
  </Layout>  
);

export default IndexPage;
