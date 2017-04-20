import React from 'react';
import { List } from 'immutable';
// components
import EpisodesListItem from './EpisodesListItem/EpisodesListItem';
import ListItem from './UI/ListItem/ListItem';

// ============================================

const EpisodesList = ({ episodes }) => (
  <ul>
    {episodes.map((episode, index) =>
      <ListItem key={index}>
        <EpisodesListItem episode={episode} />
      </ListItem>
    )}
  </ul>
);

EpisodesList.propTypes = {
  episodes: React.PropTypes.instanceOf(List).isRequired,
};

export default EpisodesList;
