import React from 'react';
import Footer from './FooterComponent';
import Header from './HeaderComponent';

const LayoutComponent = ({ children }) => {
  return (
    <>
      <Header />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default LayoutComponent;
