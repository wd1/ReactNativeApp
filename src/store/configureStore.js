// @flow

/**
 * Configure the redux store, adds a logger for letting us know what actions
 * are happening in dev mode and persists the store, for data storage
 *
 * @type {Function}
 */

import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers/index';
import sagas from '../sagas';
import isDev from '../helpers/isDev';

/**
 * Log the redux actions to the console
 *
 * @return {[type]} [description]
 */
function loggerMiddleware() {
  return next => (action) => {
    // We can allow this log in dev mode
    // eslint-disable-next-line no-console
    console.log(`REDUX ACTION: ${action.type}`);

    return next(action);
  };
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  undefined,
  compose(
    isDev()
      ? applyMiddleware(loggerMiddleware, sagaMiddleware)
      : applyMiddleware(sagaMiddleware),
    autoRehydrate()
  )
);

persistStore(store, {
  storage: AsyncStorage,
  blacklist: [],
});

sagaMiddleware.run(sagas);

export default store;
