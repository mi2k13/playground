import React from 'react';
import { List, Map } from 'immutable';
// components
import Button from '../UI/Button/Button';
import Heading from '../UI/Heading/Heading';
import Image from '../UI/Image/Image';
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
      return <Loader />
    }

    const isFollowed = collection.includes(show.get('id'));

    return (
      <div>
        <Section style={styles.product}>
          {/* POSTER */}
          <Image
            alt={show.get('name')}
            image={show.get('image')}
            style={styles.poster}
          />

          <div className={styles.headingContainer}>
            {/* PROUCT TITLE */}
            <Heading style={styles.heading}>
              {show.get('name')}
            </Heading>

            {/* FOLLOW BUTTON */}
            <Button
              handleClick={() => updateCollection(+show.get('id'))}
              isActive={!isFollowed}
              label={isFollowed ? 'Unfollow' : 'Follow'}
              size="big"
              style={styles.followButton}
            />
          </div>

          {/* SHOWS INFOS AND SUMMARY */}
          <ShowInfos
            show={show}
            style={styles.infos}
          />
          <div
            className={styles.summary}
            dangerouslySetInnerHTML={{ __html: show.get('summary') }}
          />
        </Section>


        {/* SEASONS */}
        <Section>
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
  collection: React.PropTypes.instanceOf(List),
  episodes: React.PropTypes.instanceOf(List),
  fetchShowIfNeeded: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.instanceOf(Map),
  seasons: React.PropTypes.instanceOf(List),
  show: React.PropTypes.instanceOf(Map).isRequired,
  updateCollection: React.PropTypes.func.isRequired,
};

Show.defaultProps = {
  show: Map(),
};

export default Show;
