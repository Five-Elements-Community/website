import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

const LayoutComponent: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
        <main className="bg-earth">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutComponent;
