import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './Header.css';

// ============================================

const Header = () => {
  const Item = ({link, label}) => (
    <li className={styles.item}>
      <NavLink
        activeClassName={styles.active}
        className={styles.itemLink}
        exact
        to={link}
      >
        {label}
      </NavLink>
    </li>
  );

  return (
    <header className={styles.root}>
      <ul className={styles.nav}>
        <Item link="/" label="Search" />
        <Item link="/collection" label="Collection" />
      </ul>
    </header>
  );
};

export default Header;
