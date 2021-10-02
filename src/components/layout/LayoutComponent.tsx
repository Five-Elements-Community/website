import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

const LayoutComponent: React.FunctionComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutComponent;
