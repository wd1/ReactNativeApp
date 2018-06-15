import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardSection = props => (
  <View style={styles.containerStyle}>{props.children}</View>
);

export default CardSection;
