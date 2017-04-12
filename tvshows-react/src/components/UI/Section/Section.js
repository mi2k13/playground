import React from 'react';
import styles from './Section.css';

const Section = ({ children }) => (
  <section className={styles.root}>
    {children}
  </section>
);

export default Section;
