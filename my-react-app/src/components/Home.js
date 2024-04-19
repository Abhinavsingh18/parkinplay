import React from 'react';
import Header from './Header';
import AppBanner from './AppBanner';
import Rnav from './Rnav';
import Bottomtab from './Bottomtab';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <Header />
      <AppBanner />
      <Rnav />
      <Footer/>
      <Bottomtab />

    </div>
  );
}

export default Home;