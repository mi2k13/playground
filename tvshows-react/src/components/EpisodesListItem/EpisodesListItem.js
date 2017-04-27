import React from 'react';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
// styles
import styles from './EpisodesListItem.css';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

// ============================================

const EpisodesListItem = ({ episode }) => {
  const today = new Date().getTime();
  const hasBeenAired = new Date(episode.get('airdate')).getTime() < today;

  const episodeNumberFormat = episodeNumber => {
    if (episodeNumber < 10) {
      return '0' + episodeNumber;
    } return episodeNumber;
  }

  return (
    <div className={cx(styles.root, { unaired: !hasBeenAired })}>
      {/* AIR DATE */}
      <span className={styles.date}>
        {new Date(episode.get('airdate')).toLocaleDateString()}
      </span>
      {/* EPISODE NAME */}
      <span className={styles.episode}>
        {`${episodeNumberFormat(episode.get('number'))}. ${episode.get('name')}`}
      </span>
    </div>
  );
};

EpisodesListItem.propTypes = {
  episode: PropTypes.instanceOf(Map).isRequired,
};

export default EpisodesListItem;
