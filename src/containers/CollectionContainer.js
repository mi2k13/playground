import { connect } from 'react-redux';
// actions
import { updateCollection } from '../actions/collection';
import { fetchShowsIfNeeded } from '../actions/shows';
// components
import Collection from '../components/Collection/Collection';

const mapStateToProps = state => ({
  collection: state.collection,
  shows: state.shows.get('data').toList().filter(show => state.collection.includes(show.get('id'))),
});

const mapDispatchToProps = dispatch => ({
  fetchShowsIfNeeded: showsIds => dispatch(fetchShowsIfNeeded(showsIds)),
  updateCollection: showId => dispatch(updateCollection(showId)),
});

const CollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);

export default CollectionContainer;
