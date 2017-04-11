import React from 'react';

const Button = ({ handleClick, label, type }) => (
  <button
    onClick={handleClick}
    type={type}
  >
    {label}
  </button>
);

Button.propTypes = {
  handleClick: React.PropTypes.func,
  label: React.PropTypes.any.isRequired,
  type: React.PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;