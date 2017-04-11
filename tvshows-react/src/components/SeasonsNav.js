import React from 'react';
import { List } from 'immutable';
import Button from './UI/Button';

// ============================================

const SeasonsNav = ({ currentSeason, handleChange, seasons }) => (
  <div>
    {seasons.map((season, index) =>
      <Button
        key={index}
        label={season.get('number')}
        handleClick={() => handleChange(season.get('number'))}
      />
    )}
  </div>
);

SeasonsNav.propTypes = {
  currentSeason: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired,
  seasons: React.PropTypes.instanceOf(List).isRequired,
};

export default SeasonsNav;
