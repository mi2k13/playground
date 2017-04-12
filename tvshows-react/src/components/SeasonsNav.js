import React from 'react';
import { List } from 'immutable';
// components
import Button from './UI/Button/Button';

// ============================================

const SeasonsNav = ({ currentSeason, handleChange, seasons }) => (
  <div>
    {seasons.map((season, index) =>
      <Button
        handleClick={() => handleChange(season.get('number'))}
        isActive={season.get('number') === currentSeason}
        key={index}
        label={season.get('number')}
        size="small"
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
