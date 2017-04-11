import React from 'react';
import { Map } from 'immutable';

// ============================================

const EpisodesListItem = ({ episode }) => (
  <div>
    {`${episode.get('number')}. ${episode.get('name')}`}
  </div>
);

EpisodesListItem.propTypes = {
  episode: React.PropTypes.instanceOf(Map).isRequired,
};

export default EpisodesListItem;
