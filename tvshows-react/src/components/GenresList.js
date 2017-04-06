import React from 'react';
import { List } from 'immutable';

// ============================================

const GenresList = ({ genres }) => (
  <span>
    {genres.map((genre, index) =>
      <span key={index}>
        {genre}
        {(index < genres.size - 1) && ', '}
      </span>
    )}
  </span>
);

GenresList.propTypes = {
  genres: React.PropTypes.instanceOf(List),
};

GenresList.defaultProps = {
  genres: List(),
};

export default GenresList;
