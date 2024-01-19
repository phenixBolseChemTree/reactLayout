import PropTypes from 'prop-types';
import React from 'react';

const HeaderContainer = ({ children }) => (
  <div className="heroProductContainer">{children}</div>
);

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContainer;
