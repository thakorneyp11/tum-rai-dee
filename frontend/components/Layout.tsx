import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>TumRaiDee - Activity Swiper</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-2">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
