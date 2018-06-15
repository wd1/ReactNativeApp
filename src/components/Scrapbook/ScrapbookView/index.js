/**
 * The view that outputs primary navigation tiles.
 *
 * Extended description and documentation provided with inline comments.
 */

import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  AsyncStorage,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ScrapbookView extends Component {
  state = { bookmarks: [], keys: [] };

  getScrapbookItems() {
    this.state.keys.map((key) => {
      AsyncStorage.getItem(key).then((response) => {
        const parsedResponse = JSON.parse(response);

        const newBookmarks = [...this.state.bookmarks, parsedResponse];
        this.setState({ bookmarks: newBookmarks });
      });
    });
  }

  componentWillMount() {
    AsyncStorage.getAllKeys()
      .then((response) => {
        this.setState({ keys: response });
      })
      .then(() => {
        this.getScrapbookItems();
      });
  }

  renderScrapbook() {
    return this.state.bookmarks.map(response => (
      <TouchableOpacity key={response.nid}>
        <View>
          <Image
            style={{
              height: 75,
              flex: 1,
              width: 75,
            }}
            source={{
              uri:
                response &&
                response.image_thumbnail &&
                response.image_thumbnail.src,
            }}
          />
          <Text>{response.title}</Text>
          <Text
            onPress={() => {
              Alert.alert(
                'Menigmatic',
                `Are you sure you want to remove: "${response.title}"?`,
                [
                  {
                    text: 'Yes',
                    onPress: () => {
                      AsyncStorage.removeItem(`@Scrapbook:${response.nid}`);
                      Actions.pop();
                    },
                  },
                  { text: 'No', onPress: () => {} },
                ],
                { cancelable: false }
              );
            }}
          >
            Remove
          </Text>
        </View>
      </TouchableOpacity>
    ));
  }

  render() {
    return <ScrollView>{this.renderScrapbook()}</ScrollView>;
  }
}

export default ScrapbookView;
