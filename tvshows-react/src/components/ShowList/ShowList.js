import React from 'react';
import { List } from 'immutable';
// components
import ShowListItem from '../ShowListItem/ShowListItem';
// styles
import styles from './ShowList.css';

// ============================================

const ShowsList = ({ collection, shows, handleItemButtonClick }) => (
  <ul className={styles.root}>
    {shows.map((show, index) =>
      <li
        key={index}
        className={styles.item}
      >
        <ShowListItem
          collection={collection}
          show={show}
          handleButtonClick={handleItemButtonClick}
        />
      </li>
    )}
  </ul>
);

ShowsList.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  handleItemButtonClick: React.PropTypes.func,
  shows: React.PropTypes.instanceOf(List),
};

export default ShowsList;
