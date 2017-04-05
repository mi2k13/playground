import { fromJS, List, Map } from 'immutable';

const initialState = Map({
  isFetching: false,
  searchResults: List(),
});

const shows = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW_SEARCH_REQUEST': {
      return state.set('isFetching', true);
    }

    case 'SHOW_SEARCH_SUCCESS': {
      return state
        .set('isFetching', false)
        .set('searchResults', fromJS(action.shows.map(item => item.show)));
    }

    default:
      return state;
  }
};

export default shows;
