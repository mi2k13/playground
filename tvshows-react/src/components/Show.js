import React from 'react';
import { List, Map } from 'immutable';
// components
import Button from './UI/Button/Button';
import Loader from './UI/Loader/Loader';
import Seasons from './Seasons';
import ShowInfos from './ShowInfos';

// ============================================

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.showId = +this.props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchShowIfNeeded(this.showId);
    this.props.fetchShowEpisodesIfNeeded(this.showId);
    this.props.fetchShowSeasonsIfNeeded(this.showId);
  }

  render() {
    const {
      collection,
      episodes,
      isFetching,
      seasons,
      show,
      updateCollection,
    } = this.props;

    if (isFetching.get('show') || isFetching.get('episodes') || isFetching.get('seasons')) {
      return <Loader />
    }

    const isFollowed = collection.includes(show.get('id'));

    return (
      <div>
        <h1>
          {`${show.get('name')} (${new Date(show.get('premiered')).getFullYear()})`}
        </h1>

        {/* FOLLOW BUTTON */}
        <Button
          handleClick={() => updateCollection(+show.get('id'))}
          isActive={!isFollowed}
          label={isFollowed ? 'Unfollow' : 'Follow'}
        />

        {/* SHOWS INFOS AND SUMMARY */}
        <ShowInfos show={show} />
        <div dangerouslySetInnerHTML={{ __html: show.get('summary') }} />

        {/* SEASONS */}
        <Seasons
          episodes={episodes}
          seasons={seasons}
        />
      </div>
    )
  }
}

Show.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  episodes: React.PropTypes.instanceOf(List),
  fetchShowIfNeeded: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.instanceOf(Map),
  seasons: React.PropTypes.instanceOf(List),
  show: React.PropTypes.instanceOf(Map).isRequired,
  updateCollection: React.PropTypes.func.isRequired,
};

Show.defaultProps = {
  show: Map(),
};

export default Show;
