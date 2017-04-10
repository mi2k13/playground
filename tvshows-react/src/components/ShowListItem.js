import React from 'react';
import { Link } from 'react-router-dom';
import { Map } from 'immutable';
// components
import Image from './common/Image';

// ============================================

const ShowListItem = ({ show }) => (
  <div>
    <Link to={`/show/${show.get('id')}`}>
      <Image
        alt={show.get('name')}
        image={show.get('image')}
      />
    </Link>
  </div>
);

ShowListItem.propTypes = {
  show: React.PropTypes.instanceOf(Map).isRequired,
};

export default ShowListItem;
