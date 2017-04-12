import React from 'react';
// styles
import styles from './Button.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const Button = ({ handleClick, isActive, label, size, style, type }) => {
  const buttonStyle = cx(
    styles.root,
    {
      active: isActive,
      [size]: size,
      [style]: style,
    }
  );
  return (
    <button
      className={buttonStyle}
      onClick={handleClick}
      type={type}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  handleClick: React.PropTypes.func,
  label: React.PropTypes.any.isRequired,
  size: React.PropTypes.string,
  style: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  size: 'regular',
  type: 'button',
};

export default Button;