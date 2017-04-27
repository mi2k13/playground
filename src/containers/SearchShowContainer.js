import { connect } from 'react-redux';
// actions
import { searchShow } from '../actions/shows';
// components
import SearchShow from '../components/SearchShow/SearchShow';

const mapStateToProps = state => ({
  shows: state.shows,
  isFetching: state.shows.get('isFetching').get('search'),
});

const mapDispatchToProps = dispatch => ({
  searchShow: query => dispatch(searchShow(query)),
});

const SearchShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchShow);

export default SearchShowContainer;
