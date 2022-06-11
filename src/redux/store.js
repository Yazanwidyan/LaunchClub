import {createStore, applyMiddleware, compose} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import reducers from './reducers';

const persistedReducer = persistReducer(
  {key: 'launch-app', storage: AsyncStorage},
  reducers,
);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(Thunk),
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);
const persistor = persistStore(store);
export {store, persistor};
