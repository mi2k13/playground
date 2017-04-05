import React from 'react';
import { List } from 'immutable';

const ShowsList = ({ shows }) => (
  <ul>
    {shows.map((show, index) =>
      <li key={index}>
        {show.get('name')}
        {show.get('network') &&
          ` (${show.get('network').get('name')})`
        }
      </li>
    )}
  </ul>
);

ShowsList.propTypes = {
  shows: React.PropTypes.instanceOf(List),
};

export default ShowsList;
