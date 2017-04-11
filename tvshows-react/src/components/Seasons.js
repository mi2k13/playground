import React from 'react';
import { List } from 'immutable';
// components
import SeasonsNav from './SeasonsNav';
import EpisodesList from './EpisodesList';

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

    return (
      <div>
        <SeasonsNav
          currentSeason={currentSeason}
          seasons={seasons}
          handleChange={this.handleCurrentSeasonChange}
        />
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
