import React from 'react';
import { Link } from 'react-router-dom';
import { List, Map } from 'immutable';
// components
import Icon from '../UI/Icon/Icon';
import Image from '../UI/Image/Image';
// styles
import styles from './ShowListItem.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

// ============================================

const ShowListItem = ({ collection, show, handleButtonClick }) => {
  const isFollowed = collection && collection.includes(show.get('id'));

  const handleClick = (event) => {
    event.preventDefault();
    handleButtonClick(+show.get('id'));
  }

  return (
    <div className={styles.root}>
      <Link to={`/show/${show.get('id')}`}>
        {/* FOLLOW BUTTON */}
        {handleButtonClick &&
          <button
            onClick={handleClick}
            className={cx(styles.button, { active: isFollowed })}
          >
            <Icon
              size="big"
              symbol="check"
            />
          </button>
        }

        {/* IMAGE */}
        <Image
          alt={show.get('name')}
          image={show.get('image')}
          size="original"
          width="100%"
        />
      </Link>
    </div>
  );
}

ShowListItem.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  show: React.PropTypes.instanceOf(Map).isRequired,
  handleButtonClick: React.PropTypes.func,
};

export default ShowListItem;
