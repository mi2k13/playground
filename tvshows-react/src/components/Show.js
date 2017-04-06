import React from 'react';
import { Map } from 'immutable';
// components
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
      isFetching,
      show,
    } = this.props;

    if (isFetching) {
      return <Loader />
    }

    return (
      <div>
        <h1>
          {`${show.get('name')} (${new Date(show.get('premiered')).getFullYear()})`}
        </h1>
        <ShowInfos show={show} />

        <div dangerouslySetInnerHTML={{ __html: show.get('summary') }} />
      </div>
    )
  }
}

Show.propTypes = {
  fetchShowIfNeeded: React.PropTypes.func,
  isFetching: React.PropTypes.bool,
  show: React.PropTypes.instanceOf(Map),
};

Show.defaultProps = {
  show: Map(),
};

export default Show;
