import React from 'react';
// styles
import styles from './Button.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const Button = ({ children, handleClick, isActive, size, style, type }) => {
  const buttonStyle = cx(
    styles.root,
    size,
    style,
    {
      active: isActive,
    }
  );

  return (
    <button
      className={buttonStyle}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  handleClick: React.PropTypes.func,
  size: React.PropTypes.string,
  style: React.PropTypes.string,
  type: React.PropTypes.oneOf(['button', 'submit']),
};

Button.defaultProps = {
  size: 'regular',
  type: 'button',
};

export default Button;
