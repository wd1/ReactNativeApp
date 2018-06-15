/**
 *  TODO-Ash Finish styling of flexboxes.
 *  TODO-Ash Add user navigation on the 'TouchableOpacity'.
 */

/**
 * The individual blocks that are parsed to the Dashboard View
 */

import React from 'react';
import {
  Text,
  Image,
  TouchableOpacity,
  Alert,
  View,
  Dimensions,
} from 'react-native';
import Tile from '../../Tile';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

const DashboardContent = ({ itemData }) => {
  const {
    title,
    field_icon,
    icon_colour,
    background_colour,
    content_api_feed,
  } = itemData;

  const deviceWidth = Dimensions.get('window').width;

  return (
    <TouchableOpacity
      onPress={() => {
        Actions.ArticleView({ title, content_api_feed });
      }}
    >
      <View style={{ width: deviceWidth / 2, height: deviceWidth / 2 }}>
        <Tile background={background_colour}>
          <Image
            style={[styles.iconStyle, { tintColor: icon_colour }]}
            source={{ uri: field_icon.src }}
          />
          <Text style={styles.tileContentStyle}>{title}</Text>
        </Tile>
      </View>
    </TouchableOpacity>
  );
};

export default DashboardContent;
