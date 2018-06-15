// @flow

/**
 * The state returned by the settingsStatus reducer
 *
 * @typedef {Object}   ExampleState
 * @property {String}  status The status to of the save settings action
 * @property {String}  id     Unique id indicating the save session
 * @property {Error?}  error  An optional error object
 */

/**
 * An example reducer
 *
 * TODO: Remove and use real reducers
 *
 * @param {ExampleState} [state] The previous state for this reducer
 * @param {ReduxAction} action The redux action being passed to the reducer
 *
 * @return {ExampleState} The transformed state
 */
function example(state = true, { type }) {
  switch (type) {
    case 'TOGGLE_EXAMPLE_SUCCEEDED':
      return !state;

    default:
      return state;
  }
}

export default example;
