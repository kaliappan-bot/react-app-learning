import React from 'react';
import PropTypes from 'prop-types';

function Learning_28062025(props) {
  return <h2>I am a { props.brand }!</h2>;
}

Learning_28062025.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Learning_28062025;

