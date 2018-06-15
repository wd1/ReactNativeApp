// @flow

/**
 * Entry file for expo. Do not rename the file. This is the entry for both iOS
 * and Android
 */

import React from 'react';
import { Provider } from 'react-redux';
import App from './src/components/App';
import store from './src/store/configureStore';

/**
 * Entry component for the entire application, wraps the app in the redux
 * provider, so components can subscribe to the state
 *
 * @return {ReactElement} The component to render
 */
const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
