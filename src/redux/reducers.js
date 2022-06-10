import {SET_DARK_THEME} from './actions';

const initialState = {
  theme: 'dark',
};

const themeReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_DARK_THEME:
      return {...state, theme: payload};
    default:
      return state;
  }
};

export default themeReducer;
