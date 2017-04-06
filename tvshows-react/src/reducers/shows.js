import { fromJS, List, Map } from 'immutable';

const initialState = Map({
  isFetching: false,
  searchResults: List(),
  data: Map(),
});

const shows = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_FETCH_REQUEST': {
      return state.set('isFetching', true);
    }

    case 'SHOW_FETCH_SUCCESS': {
      return state
        .set('isFetching', false)
        .setIn(['data', action.showId], fromJS(action.show));
    }

    case 'SHOW_SEARCH_REQUEST': {
      return state.set('isFetching', true);
    }

    case 'SHOW_SEARCH_SUCCESS': {
      return state
        .set('isFetching', false)
        .set('searchResults', fromJS(action.shows.map(item => item.show)))
        // save shows data and convert List to Map
        .set('data', Map(action.shows.map(s => [s.show.id, fromJS(s.show)])));
    }

    default:
      return state;
  }
};

export default shows;
