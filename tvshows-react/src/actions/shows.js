const API_ROOT = 'http://api.tvmaze.com';

// ==============================

// FETCH EPISODES
const fetchShowEpisodesRequest = showId => ({
  type: 'SHOW_FETCH_EPISODES_REQUEST',
  showId
});

const fetchShowEpisodesSuccess = (showId, json) => ({
  type: 'SHOW_FETCH_EPISODES_SUCCESS',
  episodes: json,
  showId
});

const fetchShowEpisodes = showId => {
  return dispatch => {
    dispatch(fetchShowEpisodesRequest(showId));

    return fetch(`${ API_ROOT }/shows/${ showId }/episodes`)
      .then(response => response.json())
      .then(json => dispatch(fetchShowEpisodesSuccess(showId, json)));
  };
};

const shouldFetchShowEpisodes = (state, showId) => {
  const episodes = state.shows.get('episodes').get(showId);

  if (!episodes || episodes.size === 0) {
    return true;
  }
  return false;
}

export const fetchShowEpisodesIfNeeded = showId => {
  return (dispatch, getState) => {
    if(shouldFetchShowEpisodes(getState(), showId)) {
      return dispatch(fetchShowEpisodes(showId));
    }
  }
};

// FETCH SHOW
const fetchShowRequest = showId => ({
  type: 'SHOW_FETCH_REQUEST',
  showId
});

const fetchShowSuccess = (showId, json) => ({
  type: 'SHOW_FETCH_SUCCESS',
  show: json,
  showId
});

const fetchShow = showId => {
  return dispatch => {
    dispatch(fetchShowRequest(showId));

    return fetch(`${ API_ROOT }/shows/${ showId }`)
      .then(response => response.json())
      .then(json => dispatch(fetchShowSuccess(showId, json)));
  };
};

const shouldFetchShow = (state, showId) => {
  const show = state.shows.get('data').get(showId);

  if (!show || show.size === 0) {
    return true;
  }
  return false;
}

export const fetchShowIfNeeded = showId => {
  return (dispatch, getState) => {
    if(shouldFetchShow(getState(), showId)) {
      return dispatch(fetchShow(showId));
    }
  }
};

export const fetchShowsIfNeeded = showsIds => {
  return dispatch => {
    return showsIds.map(showId => dispatch(fetchShowIfNeeded(showId)));
  }
};

// SEARCH
const searchShowRequest = query => ({
  type: 'SHOW_SEARCH_REQUEST',
  query
});

const searchShowSuccess = (query, json) => ({
  type: 'SHOW_SEARCH_SUCCESS',
  shows: json,
  query
});

export const searchShow = query => {
  return dispatch => {
    dispatch(searchShowRequest(query));

    return fetch(`${ API_ROOT }/search/shows?q=${ query }`)
      .then(response => response.json())
      .then(json => dispatch(searchShowSuccess(query, json)));
  };
};


// FETCH EPISODES
const fetchShowSeasonsRequest = showId => ({
  type: 'SHOW_FETCH_SEASONS_REQUEST',
  showId
});

const fetchShowSeasonsSuccess = (showId, json) => ({
  type: 'SHOW_FETCH_SEASONS_SUCCESS',
  seasons: json,
  showId
});

const fetchShowSeasons = showId => {
  return dispatch => {
    dispatch(fetchShowSeasonsRequest(showId));

    return fetch(`${ API_ROOT }/shows/${ showId }/seasons`)
      .then(response => response.json())
      .then(json => dispatch(fetchShowSeasonsSuccess(showId, json)));
  };
};

const shouldFetchShowSeasons = (state, showId) => {
  const episodes = state.shows.get('episodes').get(showId);

  if (!episodes || episodes.size === 0) {
    return true;
  }
  return false;
}

export const fetchShowSeasonsIfNeeded = showId => {
  return (dispatch, getState) => {
    if(shouldFetchShowSeasons(getState(), showId)) {
      return dispatch(fetchShowSeasons(showId));
    }
  }
};
