import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
// components
import Heading from '../UI/Heading/Heading';
import ShowsList from '../ShowsList/ShowsList';

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
    } = this.props;

    return (
      <div>
        <Heading>
          Collection
        </Heading>
        <ShowsList
          collection={collection}
          handleItemButtonClick={this.updateCollection}
          shows={shows}
        />
      </div>
    );
  }
}

Collection.propTypes = {
  collection: PropTypes.instanceOf(List),
  fetchShowsIfNeeded: PropTypes.func,
  shows: PropTypes.instanceOf(List),
  updateCollection: PropTypes.func,
};

Collection.defaultProps = {
  collection: List(),
};

export default Collection;
