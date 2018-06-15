/**
 * Outputs a single article page, takes id as prop for content retrieval.
 *
 * Extended description and documentation provided with inline comments.
 */

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';
import Card from '../../Card/Card';
import CardSection from '../../Card/CardSection';
import styles from './styles';

// Data is dynamic so it has to be a class component not a const.
class ArticlePage extends Component {
  saveToScrapbook() {
    try {
      AsyncStorage.setItem(
        `@Scrapbook:${this.props.nid}`,
        JSON.stringify(this.props)
      );
      // const currScrapbook = AsyncStorage.getItem('@Scrapbook');
      // console.log(currScrapbook);

      /*
            const addThis = JSON.stringify(this.props);
            const updateToScrapbook = JSON.stringify(currScrapbook) + addThis;
            const updatedScrapbook = JSON.stringify(updateToScrapbook);
            console.log(updatedScrapbook);
            const val = JSON.parse(updatedScrapbook);
            console.log(val);
            */

      Alert.alert(
        'Menigmatic',
        'Added To Scrapbook',
        [
          {
            text: 'Visit My Scrapbook',
            onPress: () => Actions.ScrapbookView(),
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );

      console.log(AsyncStorage.getAllKeys());
    } catch (error) {
      // Houston, we have a problem?!
      Alert.alert(
        'Menigmatic',
        'Error adding to your scrapbook. Please try again!',
        [{ text: 'Ok', onPress: () => {} }],
        { cancelable: false }
      );
    }
  }

  render() {
    const {
      title,
      post_date,
      image_thumbnail,
      authored_by,
      main_content,
    } = this.props;

    const { width, height } = Dimensions.get('window');

    return (
      <ScrollView>
        <Card>
          {/* <CardSection>
                        <Text style={ styles.headerTextStyle }>{ title }</Text>
                    </CardSection> */}

          <CardSection style={styles.thumbnailContainerStyle}>
            <Image
              style={styles.thumbnailStyle}
              source={{ uri: image_thumbnail.src }}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.textAuthorStyle}>By {authored_by}</Text>
            <Text style={styles.textDateStyle}>{post_date}</Text>
          </CardSection>

          <CardSection>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                width,
              }}
            />
          </CardSection>

          <CardSection>
            <Text style={styles.mainContentStyle}>{main_content}</Text>
          </CardSection>

          <CardSection>
            <View
              style={{
                backgroundColor: '#3d4776',
                paddingTop: 15,
                paddingBottom: 15,
                paddingRight: 20,
                width,
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity>
                <Text
                  style={{
                    color: '#ffffff',
                    textAlign: 'left',
                    width: width / 2,
                    paddingLeft: 20,
                  }}
                >
                  Share
                </Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text
                  style={{
                    color: '#ffffff',
                    textAlign: 'right',
                    width: width / 2,
                    paddingRight: 20,
                  }}
                  onPress={() => {
                    this.saveToScrapbook();
                  }}
                >
                  Add To Scrapbook
                </Text>
              </TouchableOpacity>
            </View>
          </CardSection>
        </Card>
      </ScrollView>
    );
  }
}

export default ArticlePage;
