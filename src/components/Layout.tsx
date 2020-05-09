import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="container mx-auto max-w-screen-md px-4">
    <Helmet>
      <body className="bg-gray-100 text-gray-700 leading-relaxed" />
    </Helmet>

    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  </div>
);

export default Layout;
