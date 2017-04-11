import { connect } from 'react-redux';
// actions
import { updateCollection } from '../actions/collection';
import {
  fetchShowIfNeeded,
  fetchShowEpisodesIfNeeded,
  fetchShowSeasonsIfNeeded,
} from '../actions/shows';
// components
import Show from '../components/Show';

const mapStateToProps = (state, ownProps) => {
  const showId = +ownProps.match.params.id;

  return ({
    collection: state.collection,
    episodes: state.shows.get('episodes').get(showId),
    isFetching: state.shows.get('isFetching'),
    seasons: state.shows.get('seasons').get(showId),
    show: state.shows.get('data').get(showId),
  });
};

const mapDispatchToProps = dispatch => ({
  updateCollection: showIds => dispatch(updateCollection(showIds)),
  fetchShowIfNeeded: showsId => dispatch(fetchShowIfNeeded(showsId)),
  fetchShowEpisodesIfNeeded: showsId => dispatch(fetchShowEpisodesIfNeeded(showsId)),
  fetchShowSeasonsIfNeeded: showsId => dispatch(fetchShowSeasonsIfNeeded(showsId)),
});

const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);

export default ShowContainer;
