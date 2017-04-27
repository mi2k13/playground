import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

// ============================================

const GenresList = ({ genres }) => (
  <span>
    {genres.map((genre, index) => (
      <span key={index}>
        {genre}
        {(index < genres.size - 1) && ', '}
      </span>
    ))}
  </span>
);

GenresList.propTypes = {
  genres: PropTypes.instanceOf(List),
};

GenresList.defaultProps = {
  genres: List(),
};

export default GenresList;
