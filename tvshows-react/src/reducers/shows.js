import { fromJS, List, Map } from 'immutable';

const initialState = Map({
  data: Map(),
  episodes: Map(),
  isFetching: Map({
    episodes: false,
    seasons: false,
    search: false,
    show: false
  }),
  searchResults: List(),
  seasons: Map(),
});

const shows = (state = initialState, action) => {
  switch(action.type) {
    // FETCH SHOW
    case 'SHOW_FETCH_REQUEST': {
      return state.setIn(['isFetching', 'show'], true);
    }

    case 'SHOW_FETCH_SUCCESS': {
      return state
        .setIn(['isFetching', 'show'], false)
        .setIn(['data', action.showId], fromJS(action.show));
    }

    // FETCH EPISODES
    case 'SHOW_FETCH_EPISODES_REQUEST': {
      return state.setIn(['isFetching', 'episodes'], true);
    }

    case 'SHOW_FETCH_EPISODES_SUCCESS': {
      return state
        .setIn(['isFetching', 'episodes'], false)
        .setIn(['episodes', action.showId], fromJS(action.episodes));
    }

    // SEARCH
    case 'SHOW_SEARCH_REQUEST': {
      return state.setIn(['isFetching', 'search'], true);
    }

    case 'SHOW_SEARCH_SUCCESS': {
      return state
        .setIn(['isFetching', 'search'], false)
        .set('searchResults', fromJS(action.shows.map(item => item.show)))
        // save shows data and convert List to Map
        .set('data', Map(action.shows.map(s => [s.show.id, fromJS(s.show)])));
    }

    // FETCH SEASONS
    case 'SHOW_FETCH_SEASONS_REQUEST': {
      return state.setIn(['isFetching', 'seasons'], true);
    }

    case 'SHOW_FETCH_SEASONS_SUCCESS': {
      return state
        .setIn(['isFetching', 'seasons'], false)
        .setIn(['seasons', action.showId], fromJS(action.seasons));
    }

    default:
      return state;
  }
};

export default shows;
