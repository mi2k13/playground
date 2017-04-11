import React from 'react';
// styles
import styles from './ListItem.css';

// ============================================

const ListItem = ({ data, children }) => {
  if (!children && (!data || data.size === 0)) {
    return null;
  }
  return (
    <li className={styles.root}>
      {children ? children : data}
    </li>
  )
};

ListItem.propTypes = {
  data: React.PropTypes.any,
}

export default ListItem;
