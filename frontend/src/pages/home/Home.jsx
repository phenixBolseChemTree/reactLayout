import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';
import HeroCategories from '../../components/heroCategories';
import HeroProducts from '../../components/heroProducts';
import HeroAdvantages from '../../components/heroAdvantages';
import HeroPhotos from '../../components/heroPhotos';
import Sugestion from '../../components/sugestion';

const Home = ({ data }) => (
  <>
    <Header />
    <div>
      <HeroCategories heroCategories={data.heroCategories} />
    </div>
    <div className="heroProductContainer">
      <HeroProducts heroProducts={data.heroProducts} />
    </div>
    <div className="heroAdvantagesContainer">
      <HeroAdvantages advantages={data.advantages} />
    </div>
    <div className="heroPhotoContainer">
      <HeroPhotos photoData={data.photoData} />
    </div>
    <div className="sugestionContainer">
      <Sugestion />
    </div>
  </>
);

Home.propTypes = {
  data: PropTypes.shape({
    heroCategories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    heroProducts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        background: PropTypes.string.isRequired,
      }),
    ).isRequired,
    advantages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }),
    ).isRequired,
    photoData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default Home;
