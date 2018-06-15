import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Tile = props => (
  <View style={[styles.tileStyle, { backgroundColor: props.background }]}>
    {props.children}
  </View>
);

export default Tile;
