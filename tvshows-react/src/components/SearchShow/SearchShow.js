import React from 'react';
import { Map } from 'immutable';
// components
import Heading from '../UI/Heading/Heading';
import Loader from '../UI/Loader/Loader';
import SearchForm from '../SearchForm/SearchForm';
import ShowList from '../ShowList/ShowList';
// styles
import styles from './SearchShow.css';

// ============================================

class SearchShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchShow(this.state.query);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    // dont render component on query update. the view doesn't change
    if (nextState.query !== this.state.query) {
      return false;
    }
    return true;
  }

  render() {
    const {
      isFetching,
      shows,
    } = this.props;

    const {
      query,
    } = this.state;

    return (
      <div>
        {/* HEADING */}
        <Heading>
          Search
        </Heading>

        {/* FORM */}
        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          placeholder="Breakind Bad, Lost,..."
        />

        {/* LOADER */}
        {isFetching &&
          <Loader />
        }

        {/* EMPTY MESSAGE OR RESULTS */}
        {query && !isFetching && shows.get('searchResults').size === 0
          ? <p>No results :(</p>
          : <ShowList
              shows={shows.get('searchResults')}
              style={styles.results}
            />
        }
      </div>
    );
  }
}

SearchShow.propTypes = {
  searchShow: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool,
  shows: React.PropTypes.instanceOf(Map),
};

export default SearchShow;
