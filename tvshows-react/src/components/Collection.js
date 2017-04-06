import React from 'react';
import { List } from 'immutable';
// components
import ShowsList from './ShowsList';

// ============================================

class Collection extends React.Component {
  componentDidMount() {
    this.props.fetchShowsIfNeeded(this.props.collection);
  }

  render() {
    const {
      shows,
    } = this.props;

    return (
      <div>
        <h1>Collection</h1>
        <ShowsList shows={shows} />
      </div>
    );
  }
}

Collection.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  fetchShowsIfNeeded: React.PropTypes.func,
  shows: React.PropTypes.instanceOf(List),
};

Collection.defaultProps = {
  collection: List(),
};

export default Collection;
