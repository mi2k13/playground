import React from 'react';
import PropTypes from 'prop-types';
// styles
import styles from './Heading.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const Heading = ({ children, hasSubtitle, level, styleLevel, style }) => {
  const headingStyle = cx(
    styles.root,
    `heading${styleLevel}`,
    style,
    {
      subtitled: hasSubtitle
    }
  );

  switch(level) {
    case 1:
      return <h1 className={headingStyle}>{children}</h1>;
    case 2:
      return <h2 className={headingStyle}>{children}</h2>;
    default:
      return <h3 className={headingStyle}>{children}</h3>;
  }
};

Heading.propTypes = {
  hasSubtitle: PropTypes.bool,
  level: PropTypes.number,
  style: PropTypes.string,
  styleLevel: PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
  styleLevel: 1,
};

export default Heading;
