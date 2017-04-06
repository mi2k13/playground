import React from 'react';
import { List, Map } from 'immutable';
// components
import Button from './common/Button';
import Loader from './common/Loader';
import ShowInfos from './ShowInfos';

// ============================================

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.showId = +this.props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchShowIfNeeded(this.showId);
  }

  render() {
    const {
      collection,
      isFetching,
      show,
      updateCollection,
    } = this.props;

    if (isFetching) {
      return <Loader />
    }

    return (
      <div>
        <h1>
          {`${show.get('name')} (${new Date(show.get('premiered')).getFullYear()})`}
        </h1>

        {/* FOLLOW BUTTON */}
        <Button
          handleClick={() => updateCollection(+show.get('id'))}
          label={collection.includes(show.get('id')) ? 'Unfollow' : 'Follow'}
        />

        {/* SHOWS INFOS AND SUMMARY */}
        <ShowInfos show={show} />
        <div dangerouslySetInnerHTML={{ __html: show.get('summary') }} />
      </div>
    )
  }
}

Show.propTypes = {
  collection: React.PropTypes.instanceOf(List),
  fetchShowIfNeeded: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool,
  show: React.PropTypes.instanceOf(Map).isRequired,
  updateCollection: React.PropTypes.func.isRequired,
};

Show.defaultProps = {
  show: Map(),
};

export default Show;
