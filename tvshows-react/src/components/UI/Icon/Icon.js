import React from 'react';
import PropTypes from 'prop-types';
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
  size: PropTypes.string,
  style: PropTypes.string,
  symbol: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  size: 'regular',
};

export default Icon;
