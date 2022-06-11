import {SET_DARK_THEME} from '../actions/actions';

const initialState = {
  theme: 'dark',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_DARK_THEME:
      return {...state, theme: payload};
    default:
      return state;
  }
};

