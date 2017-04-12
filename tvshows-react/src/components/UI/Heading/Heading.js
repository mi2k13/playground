import React from 'react';
// styles
import styles from './Heading.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

// ============================================

const Heading = ({ children, level, styleLevel, style }) => {
  const headingStyle = cx(
    styles.root,
    `heading${styleLevel}`,
    {
      [style]: style,
    }
  );

  switch(level) {
    case 1:
      return <h1 className={headingStyle}>{children}</h1>;
      break;
    case 2:
      return <h2 className={headingStyle}>{children}</h2>;
      break;
    default:
      return <h3 className={headingStyle}>{children}</h3>;
      break;
  }
};

Heading.propTypes = {
  level: React.PropTypes.number,
  style: React.PropTypes.string,
  styleLevel: React.PropTypes.number,
};

Heading.defaultProps = {
  level: 1,
  styleLevel: 1,
};

export default Heading;
