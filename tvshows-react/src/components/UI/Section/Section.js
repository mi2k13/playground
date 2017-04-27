import React from 'react';
import PropTypes from 'prop-types';
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
  style: PropTypes.string,
};

export default Section;
