import React from 'react';
import Header from '../../components/header/Header';
import HeroCategories from '../../components/hero-categories';

function Home() {
  const heroCategories = [{
    id: 1,
    title: 'Clothing & Shoes',
  }, {
    id: 2,
    title: 'Home & Living',
  },
  {
    id: 3,
    title: 'Art & Collectibles',
  }];

  return (
    <>
      <Header />
      <HeroCategories heroCategories={heroCategories} />
      {/* <HeroCategories /> */}
      {/* <HeroProducts /> */}
      {/* <HeroAdvantages /> */}
    </>
  );
}

export default Home;
