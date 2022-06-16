import {ADD_TO_WATCHLIST} from '../actions/actions';

const initialState = [];

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_WATCHLIST:
      const found = state.find(item => item.id == payload.id);
      if (!!found) {
        return state.filter(item => item.id !== payload.id);
      } else {
        return [...state, {...payload}];
      }

    default:
      return state;
  }
};
