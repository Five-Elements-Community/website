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
    <section id="gettoken" className="p-20">
      <GetTokenComponent />
    </section>
    <section id="ecosystem" className="p-20">
      <EcoSystem />
    </section>
    <section id="community" className="p-20">
      <CommunityComponent />
    </section>
  </Layout>
);

export default IndexPage;
