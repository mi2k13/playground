const API_ROOT = 'http://api.tvmaze.com';

// ==============================

// FETCH
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
