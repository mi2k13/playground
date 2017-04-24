import React from 'react';
import { List } from 'immutable';
// components
import EpisodesListItem from '../EpisodesListItem/EpisodesListItem';
import ListItem from '../UI/ListItem/ListItem';

// ============================================

const EpisodesList = ({ episodes }) => {
  if (episodes.size === 0) {
    return <div>No episode found... :(</div>;
  }

  return (
    <ul>
      {episodes.map((episode, index) => (
        <ListItem key={index}>
          <EpisodesListItem episode={episode} />
        </ListItem>
      ))}
    </ul>
);
};

EpisodesList.propTypes = {
  episodes: React.PropTypes.instanceOf(List).isRequired,
};

export default EpisodesList;
