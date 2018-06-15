// @flow

/**
 * The view that outputs primary navigation tiles.
 *
 * Extended description and documentation provided with inline comments.
 */

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

class TabView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => Actions.DashboardView()}
        >
          <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => Actions.BreatheView()}
        >
          <Text>Breathe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => Actions.ScrapbookView()}
        >
          <Text>Scrapbook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default TabView;
