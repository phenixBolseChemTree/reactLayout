import React from 'react';
import Header from '../../components/header';
import HeroCategories from '../../components/heroCategories';

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
