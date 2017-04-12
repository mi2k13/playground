import React from 'react';
import { Map } from 'immutable';
// components
import GenresList from './GenresList';
import ListItem from './UI/ListItem/ListItem';

// ============================================

const ListItems = ({ show }) => {
  const getChannel = (network, webChannel) => {
    if (show.get('network')) {
      return network.get('name');
    } else if (show.get('webChannel')) {
      return webChannel.get('name');
    } return 'Unknown';
  }

  return (
    <ul>
      <ListItem
        type="inline"
        separated
        data={getChannel(show.get('network'), show.get('webChannel'))}
      />
      <ListItem
        type="inline"
        separated
        data={show.get('status')}
      />
      <ListItem
        type="inline"
        separated
        data={show.get('language')}
      />
      <ListItem
        type="inline"
        separated
        data={show.get('genres')}
      >
        <GenresList genres={show.get('genres')} />
      </ListItem>
    </ul>
  );
};

ListItems.propTypes = {
  show: React.PropTypes.instanceOf(Map),
};

export default ListItems;
