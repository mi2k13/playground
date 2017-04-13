import React from 'react';
// styles
import styles from './Section.css';
import cx from 'classnames';

// ============================================

const Section = ({ children, style }) => (
  <section className={cx(styles.root, style)}>
    {children}
  </section>
);

Section.propTypes = {
  style: React.PropTypes.string,
};

export default Section;
