import React from 'react';
import Header from '../../components/Header/Header';
import HeroCategories from '../../components/heroCategories/HeroCategories';
import HeroProducts from '../../components/heroProducts/HeroProducts';

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

  const heroProducts = [
    {
      id: 1, colors: ['#7CB93E', '#33ABC6', '#1CCD8D', '#3F65EA', '#F64A69', '#A635EC', '#F9A85D'], title: 'Vonna Neva Walnut Sandalye Chair', price: '195,13', background: '#D3FBD9',
    },
    {
      id: 2, colors: ['#7CB93E', '#3F65EA', '#F64A69', '#A635EC', '#F9A85D'], title: 'Wood lamp, Floor Lamp, Lambader, Decorative', price: '458,43', background: '#FFE4BD',
    },
    {
      id: 3, colors: ['#3F65EA', '#F64A69', '#A635EC'], title: 'NOCKEBY 3-Seat Sofa Cover Slipcover Hand Made With Multiple', price: '789,67', background: '#D9ABFD',
    },
    {
      id: 4, colors: ['#7CB93E', '#1CCD8D', '#F64A69', '#A635EC', '#F9A85D'], title: 'Lace Punch Needle Pillow Covers with invisible zipper, 16*16 inches', price: '43,23', background: '#FDF0AB',
    },
  ];

  return (
    <>
      <Header />
      <div>
        <HeroCategories heroCategories={heroCategories} />
      </div>
      <div className="block-2">
        <HeroProducts heroProducts={heroProducts} />
      </div>
    </>
  );
}

export default Home;
