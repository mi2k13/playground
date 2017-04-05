const API_ROOT = 'http://api.tvmaze.com';

// ==============================

const searchShowRequest = query => ({
  type: 'SHOW_SEARCH_REQUEST',
  query
});

const searchShowSuccess = (query, json) => ({
  type: 'SHOW_SEARCH_SUCCESS',
  shows: json,
  query
})

export const searchShow = query => {
  return dispatch => {
    dispatch(searchShowRequest(query));

    return fetch(`${ API_ROOT }/search/shows?q=${ query }`)
      .then(response => response.json())
      .then(json => dispatch(searchShowSuccess(query, json)));
  };
};
