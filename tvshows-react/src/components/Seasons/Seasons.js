import React from 'react';
import { List, Map } from 'immutable';
// components
import Dropdown from '../UI/Dropdown/Dropdown';
import EpisodesList from '../EpisodesList/EpisodesList';
// styles
import styles from './Seasons.css';

// ============================================

class Seasons extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSeason: 1,
    };

    this.getCurrentSeasonEpisodes = this.getCurrentSeasonEpisodes.bind(this);
    this.handleCurrentSeasonChange = this.handleCurrentSeasonChange.bind(this);
  }

  getCurrentSeasonEpisodes(currentSeason, episodes) {
    return episodes.filter(episode => episode.get('season') === currentSeason);
  }

  handleCurrentSeasonChange(seasonNumber) {
    this.setState({ currentSeason: seasonNumber });
  }

  render() {
    const {
      episodes,
      seasons,
    } = this.props;

    const {
      currentSeason,
    } = this.state;

    const seasonsList = seasons.map(season => (Map({
      value: season.get('number'),
      label: `Season ${season.get('number')}`,
    })));

    return (
      <div>
        {/* DROPDOWN MENU */}
        <Dropdown
          currentLabel={`Season ${currentSeason}`}
          options={seasonsList}
          handleChange={this.handleCurrentSeasonChange}
          style={styles.dropdown}
        />
        {/* EPISODES */}
        <EpisodesList
          currentSeason={currentSeason}
          episodes={this.getCurrentSeasonEpisodes(currentSeason, episodes)}
        />
      </div>
    );
  }
}

Seasons.propTypes = {
  currentSeason: React.PropTypes.number.isRequired,
  episodes: React.PropTypes.instanceOf(List),
  seasons: React.PropTypes.instanceOf(List).isRequired,
};

Seasons.defaultProps = {
  currentSeason: 1,
  episodes: List(),
  seasons: List(),
};

export default Seasons;
