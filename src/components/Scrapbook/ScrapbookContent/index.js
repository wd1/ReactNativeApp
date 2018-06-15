/**
 *  TODO-Ash Finish styling of flexboxes.
 *  TODO-Ash Add user navigation on the 'TouchableOpacity'.
 */

/**
 * The individual blocks that are parsed to the Dashboard View
 */

import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Tile from '../Tile';

const ScrapbookContent = ({ bookmarkData }) => {
  const { title } = bookmarkData;

  return (
    <TouchableOpacity>
      <Tile>
        <View style={{ backgroundColor: '#000', padding: 5, borderRadius: 5 }}>
          {/* <Image style={ { height: 50, width: 50 } } source={ { uri: this.itemData.image_thumbnail.src } } /> */}
        </View>
        <View>
          <Text>{title}</Text>
        </View>
      </Tile>
    </TouchableOpacity>
  );
};

export default ScrapbookContent;
