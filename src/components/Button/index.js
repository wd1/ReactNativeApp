// @flow

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';

/**
 * Display a text button
 *
 * @param {Object} props Props passed to the component
 * @param {Function} props.onPress Action to take when the button is pressed
 * @param {ReactElement} props.children Children to render
 *
 * @return {ReactElement} React component to render
 */
const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
