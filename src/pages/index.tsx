import React from 'react';
import GetTokenComponent from '../components/gettoken/GetTokenComponent';
import CommunityComponent from '../components/community/CommunityComponent';
import EcoSystem from '../components/ecosystem/EcoSystemComponent';
import Introduction from '../components/introduction/IntroductionComponent';
import Layout from '../components/layout/LayoutComponent';

const IndexPage: React.FunctionComponent = () => (
  <Layout>
    <section id="intro">
      <Introduction />
    </section>
    <section id="gettoken">
      <GetTokenComponent />
    </section>
    <section id="ecosystem">
      <EcoSystem />
    </section>
    <section id="community">
      <CommunityComponent />
    </section>
  </Layout>
);

export default IndexPage;
