import {combineReducers} from 'redux';
import theme from './theme';
import watchlist from './watchlist';

export default combineReducers({
  theme,
  watchlist,
});
