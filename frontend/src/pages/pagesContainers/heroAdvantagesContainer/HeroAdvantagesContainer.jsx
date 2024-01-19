import PropTypes from 'prop-types';
import React from 'react';

const HeroAdvantagesContainer = ({ children }) => (
  <div className="heroProductContainer">{children}</div>
);

HeroAdvantagesContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroAdvantagesContainer;
