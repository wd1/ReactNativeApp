// @flow

import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Header';
import RouterComponent from '../Router';
import TabsView from '../Tabs';

/**
 * Main app file, defines the main layout
 *
 * @extends Component
 */
class App extends Component {
  /**
   * Render the component
   *
   * @return {ReactElement} React component to render
   */
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Menigmatic" />
        <RouterComponent />
        <TabsView />
      </View>
    );
  }
}

export default App;
