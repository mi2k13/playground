import React from 'react';
import { Map } from 'immutable';
// components
import Heading from '../UI/Heading/Heading';
import Loader from '../UI/Loader/Loader';
import SearchForm from '../SearchForm/SearchForm';
import ShowsList from '../ShowsList/ShowsList';
// styles
import styles from './SearchShow.css';

// ============================================

class SearchShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      showLoader: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isFetching && nextProps.isFetching) {
      // shows loader for at least 500ms so user has visual feedback on his search
      this.setState({ showLoader: true });
      setTimeout(() => {
          this.setState({ showLoader: false });
      }, 500);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // dont render component on query update. the view doesn't change
    if (nextState.query !== this.state.query) {
      return false;
    }
    return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchShow(this.state.query);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    const {
      isFetching,
      shows,
    } = this.props;

    const {
      query,
      showLoader,
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
        {showLoader &&
          <Loader />
        }

        {/* RESULTS */}
        {!showLoader && query &&
          <ShowsList
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
