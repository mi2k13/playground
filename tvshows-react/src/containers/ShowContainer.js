import { connect } from 'react-redux';
// actions
import { updateCollection } from '../actions/collection';
import { fetchShowIfNeeded } from '../actions/shows';
// components
import Show from '../components/Show';

const mapStateToProps = (state, ownProps) => {
  const showId = +ownProps.match.params.id;

  return ({
    collection: state.collection,
    isFetching: state.shows.get('isFetching'),
    show: state.shows.get('data').get(showId),
  });
};

const mapDispatchToProps = dispatch => ({
  updateCollection: showId => dispatch(updateCollection(showId)),
  fetchShowIfNeeded: showsIds => dispatch(fetchShowIfNeeded(showsIds)),
});

const ShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Show);

export default ShowContainer;
