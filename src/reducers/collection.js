import { List } from 'immutable';

const initialState = List([123, 170, 543, 743, 7246, 245, 75, 37, 842, 8423]);

const collection = (state = initialState, action) => {
  switch(action.type) {
    case 'COLLECTION_UPDATE_SUCCESS': {
      // remove from collection
      if (state.includes(action.showId)) {
        return state.delete(state.indexOf(action.showId));
      }
      // add to collection
      return state.push(action.showId);
    }

    default:
      return state;
  }
};

export default collection;
