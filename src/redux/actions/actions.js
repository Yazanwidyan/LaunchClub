export const SET_DARK_THEME = 'SET_DARK_THEME';
export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST';

export const setTheme = theme => dispatch => {
  dispatch({
    type: SET_DARK_THEME,
    payload: theme,
  });
};

export const addToWatchlist = item => dispatch => {
  dispatch({
    type: ADD_TO_WATCHLIST,
    payload: item,
  });
};
