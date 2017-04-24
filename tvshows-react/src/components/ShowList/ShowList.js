import React from 'react';
import { List } from 'immutable';
// components
import ShowListItem from '../ShowListItem/ShowListItem';
// styles
import styles from './ShowList.css';
import cx from 'classnames';

// ============================================

const ShowsList = ({ collection, handleItemButtonClick, shows, style }) => (
  <ul className={cx(styles.root, style)}>
    {shows.map((show, index) => (
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
    ))}
  </ul>
);

ShowsList.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  handleItemButtonClick: React.PropTypes.func,
  shows: React.PropTypes.instanceOf(List),
  style: React.PropTypes.string,
};

export default ShowsList;
