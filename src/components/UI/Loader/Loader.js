import React from 'react';
// styles
import styles from './Loader.css';

// ============================================

const Loader = () => (
  <div className={styles.root}>
    <div className={styles.bounce1}></div>
    <div className={styles.bounce2}></div>
  </div>
);

export default Loader;
