import React from 'react';
// styles
import styles from './Icon.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

// ============================================

const Icon = ({ size, style, symbol }) => {
  const svgStyle = cx(
    styles.root,
    style,
    size,
  );
  return (
    <svg className={svgStyle}>
      <use xlinkHref={`#icon-${symbol}`} />
    </svg>
  );
};

Icon.propTypes = {
  size: React.PropTypes.string,
  style: React.PropTypes.string,
  symbol: React.PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 'regular',
};

export default Icon;
