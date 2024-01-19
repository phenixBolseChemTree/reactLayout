import PropTypes from 'prop-types';
import React from 'react';

const HeroPhotoContainer = ({ children }) => (
  <div className="heroProductContainer">{children}</div>
);

HeroPhotoContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroPhotoContainer;
