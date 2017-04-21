import React from 'react';
import { List } from 'immutable';
// components
import Heading from '../UI/Heading/Heading';
import ShowList from '../ShowList/ShowList';

// ============================================

class Collection extends React.Component {
  constructor(props) {
    super(props);
    this.updateCollection = this.props.updateCollection.bind(this);
  }

  componentDidMount() {
    this.props.fetchShowsIfNeeded(this.props.collection);
  }

  render() {
    const {
      collection,
      shows,
      updateCollection,
    } = this.props;

    return (
      <div>
        <Heading>
          Collection
        </Heading>
        <ShowList
          collection={collection}
          handleItemButtonClick={this.updateCollection}
          shows={shows}
        />
      </div>
    );
  }
}

Collection.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  fetchShowsIfNeeded: React.PropTypes.func,
  shows: React.PropTypes.instanceOf(List),
  updateCollection: React.PropTypes.func,
};

Collection.defaultProps = {
  collection: List(),
};

export default Collection;
