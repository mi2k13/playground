import { connect } from 'react-redux';
// actions
import { searchShow } from '../actions/shows';
// components
import SearchShow from '../components/SearchShow';

const mapStateToProps = state => ({
  shows: state.shows
});

const mapDispatchToProps = dispatch => ({
  searchShow: query => dispatch(searchShow(query))
});

const SearchShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchShow);

export default SearchShowContainer;
