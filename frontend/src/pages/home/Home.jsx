import React from 'react';
import Header from '../../components/header';
import HeroCategories from '../../components/heroCategories';
import HeroProducts from '../../components/heroProducts';

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
      <HeroProducts />
      {/* <HeroAdvantages /> */}
    </>
  );
}

export default Home;
