// @flow

/**
 * TODO: Replace with actual logic. This is a temporary file to illustrate how
 * to use redux sagas
 */

import { call, put, takeEvery } from 'redux-saga/effects';

/**
 * Example class that you would probable have in ~/src/modules/ExampleApi.js
 */
class ExampleApi {
  /**
   * Example class method
   *
   * @return {Promise} Promise that resolves after a timeout
   */
  static get() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }
}

/**
 * An example saga function.
 *
 * @return {Generator} The generator redux-saga uses for async actions
 */
function* toggleExample() {
  try {
    const payload = yield call(ExampleApi.get);
    yield put({ type: 'TOGGLE_EXAMPLE_SUCCEEDED', payload });
  } catch (e) {
    yield put({ type: 'TOGGLE_EXAMPLE_FAILED', payload: e });
  }
}

/**
 * The saga entry function, register all sagas here
 *
 * @return {Generator} The generators redux-saga uses for async actions
 */
function* mySaga() {
  yield takeEvery('TOGGLE_EXAMPLE_REQUESTED', toggleExample);
}

export default mySaga;
