import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';

const ShowListItem = ({ show }) => (
  <div>
    <Link to={`/show/${show.get('id')}`}>
      {show.get('name')}
      {show.get('network') &&
        ` (${show.get('network').get('name')})`
      }
    </Link>
  </div>
);

ShowListItem.propTypes = {
  show: React.PropTypes.instanceOf(Map).isRequired,
};

export default ShowListItem;
