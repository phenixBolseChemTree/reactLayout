import React from 'react';
import Header from '../../components/header/Header';
import HeroCategories from '../../components/heroCategories';
import HeroProducts from '../../components/heroProducts';
import HeroAdvantages from '../../components/heroAdvantages';
import HeroPhotos from '../../components/heroPhotos';
import Sugestion from '../../components/sugestion';

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

  const advantages = [
    { id: 1, title: 'A community\ndoing good', description: 'Commerce is a global online marketplace, where people.' },
    { id: 2, title: 'Support independent\ncreators', description: 'Just millions of people selling the things they love.' },
    { id: 3, title: 'Peace\nof mind', description: 'Privacy is the highest priority of our dedicated team.' },
  ];

  const photoData = [
    { id: 1, title: 'Craft Kits' },
    { id: 2, title: 'Throw Pillows' },
    { id: 3, title: 'Natural Glass' },
    { id: 4, title: 'Self-care' },
    { id: 5, title: 'Gift Ideas' },
    { id: 6, title: 'Wall Decor' },
    { id: 7, title: 'Wedding' },
    { id: 8, title: 'Life Style' },
  ];

  return (
    <>
      <Header />
      <div>
        <HeroCategories heroCategories={heroCategories} />
      </div>
      <div className="heroProductContainer">
        <HeroProducts heroProducts={heroProducts} />
      </div>
      <div className="heroAdvantagesContainer">
        <HeroAdvantages advantages={advantages} />
      </div>
      <div className="heroPhotoContainer">
        <HeroPhotos photoData={photoData} />
      </div>
      <div className="sugestionContainer">
        <Sugestion />
      </div>
    </>
  );
}

export default Home;
