import PropTypes from 'prop-types';
import React from 'react';

const HeroProductContainer = ({ children }) => (
  <div className="heroProductContainer">{children}</div>
);

HeroProductContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeroProductContainer;
