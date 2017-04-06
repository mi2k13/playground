import React from 'react';
import { List } from 'immutable';
import ShowListItem from './ShowListItem';

const ShowsList = ({ shows }) => (
  <ul>
    {shows.map((show, index) =>
      <li key={index}>
        <ShowListItem show={show} />
      </li>
    )}
  </ul>
);

ShowsList.propTypes = {
  shows: React.PropTypes.instanceOf(List),
};

export default ShowsList;
