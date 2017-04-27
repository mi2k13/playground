import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
// components
import ShowsListItem from '../ShowsListItem/ShowsListItem';
// styles
import styles from './ShowsList.css';
import cx from 'classnames';

// ============================================

const ShowsList = ({ collection, handleItemButtonClick, shows, style }) => {
  if (shows.size === 0) {
    return <p>No results :(</p>;
  }

  return (
    <ul className={cx(styles.root, style)}>
      {shows.map((show, index) => (
        <li
          key={index}
          className={styles.item}
        >
          <ShowsListItem
            collection={collection}
            show={show}
            handleButtonClick={handleItemButtonClick}
          />
        </li>
      ))}
    </ul>
);
};

ShowsList.propTypes = {
  collection: PropTypes.instanceOf(List),
  handleItemButtonClick: PropTypes.func,
  shows: PropTypes.instanceOf(List),
  style: PropTypes.string,
};

export default ShowsList;
