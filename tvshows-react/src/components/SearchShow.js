import React from 'react';
import { Map } from 'immutable';
// components
import SearchForm from './SearchForm';
import ShowsList from './ShowsList';

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
      shows,
    } = this.props;

    return (
      <div>
        <h1>Search show</h1>

        <SearchForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          placeholder="Breakind Bad, Lost,..."
        />

        <ShowsList shows={shows.get('searchResults')} />
      </div>
    );
  }
}

SearchShow.propTypes = {
  searchShow: React.PropTypes.func.isRequired,
  shows: React.PropTypes.instanceOf(Map),
};

export default SearchShow;
