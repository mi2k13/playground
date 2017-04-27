import React from 'react';
import PropTypes from 'prop-types';
import { List, Map } from 'immutable';
// components
import Button from '../UI/Button/Button';
import Heading from '../UI/Heading/Heading';
import Loader from '../UI/Loader/Loader';
import Section from '../UI/Section/Section';
import Seasons from '../Seasons/Seasons';
import ShowInfos from '../ShowInfos/ShowInfos';
// styles
import styles from './Show.css';

// ============================================

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.showId = +this.props.match.params.id;
  }

  componentDidMount() {
    this.props.fetchShowIfNeeded(this.showId);
    this.props.fetchShowEpisodesIfNeeded(this.showId);
    this.props.fetchShowSeasonsIfNeeded(this.showId);
  }

  render() {
    const {
      collection,
      episodes,
      isFetching,
      seasons,
      show,
      updateCollection,
    } = this.props;

    if (isFetching.get('show') || isFetching.get('episodes') || isFetching.get('seasons')) {
      return <Loader />;
    }

    const isFollowed = collection.includes(show.get('id'));

    return (
      <div>
        <Section style={styles.product}>

          <div className={styles.header}>
            {/* PROUCT TITLE */}
            <Heading hasSubtitle>
              {show.get('name')}
            </Heading>

            {/* SHOWS INFOS */}
            <ShowInfos
              show={show}
              style={styles.infos}
            />

            {/* FOLLOW BUTTON */}
            <Button
              handleClick={() => updateCollection(+show.get('id'))}
              isActive={!isFollowed}
              size="big"
              style={styles.followButton}
            >
              {isFollowed ? 'Unfollow' : 'Follow'}
            </Button>
          </div>

          {/* SUMMARY */}
          <div dangerouslySetInnerHTML={{ __html: show.get('summary') }} />
        </Section>


        <Section>
          {/* SEASONS */}
          <Seasons
            episodes={episodes}
            seasons={seasons}
          />
        </Section>
      </div>
    );
  }
}

Show.propTypes = {
  collection: PropTypes.instanceOf(List),
  episodes: PropTypes.instanceOf(List),
  fetchShowIfNeeded: PropTypes.func.isRequired,
  isFetching: PropTypes.instanceOf(Map),
  seasons: PropTypes.instanceOf(List),
  show: PropTypes.instanceOf(Map).isRequired,
  updateCollection: PropTypes.func.isRequired,
};

Show.defaultProps = {
  show: Map(),
};

export default Show;
