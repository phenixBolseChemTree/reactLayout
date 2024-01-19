import PropTypes from 'prop-types';
import React from 'react';

const SugestionContainer = ({ children }) => (
  <div className="heroProductContainer">{children}</div>
);

SugestionContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SugestionContainer;
