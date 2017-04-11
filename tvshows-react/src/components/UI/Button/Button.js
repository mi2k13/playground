import React from 'react';
// styles
import styles from './Button.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const Button = ({ handleClick, isActive, label, type }) => (
  <button
    className={cx(styles.root, {active: isActive})}
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