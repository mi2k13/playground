import React from 'react';

const Button = ({ label, type }) => (
  <button type={type}>
    {label}
  </button>
);

Button.propTypes = {
  label: React.PropTypes.string.isRequired,
  type: React.PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'submit',
};

export default Button;