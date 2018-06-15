/**
 * The view that outputs primary navigation tiles.
 *
 * Extended description and documentation provided with inline comments.
 */

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import axios from 'axios';
import DashboardContent from '../DashboardContent';
import Tile from '../../Tile';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

// Data is dynamic so it has to be a component class not a const.
class DashboardView extends Component {
  // Destructing the JSON response data for more efficient parsing.
  // Saves the JSON response data to an array 'dashboard'.
  state = { dashboard: [], error: null };

  // Similar to __construct; however, executes when the component is rendered
  // to the page, not upon execution.
  componentWillMount() {
    // axios is similar to AJAX.
    // Retrieves the JSON feed.
    axios({
      method: 'get',
      url: 'https://dev-mk-6.pantheonsite.io/api/tiles',
      auth: {
        username: 'admin',
        password: 'admin',
      },
    })
      .then(response => this.setState({ dashboard: response.data }))
      .catch(e =>
        this.setState({ error: (e && e.message) || 'Undefined error' }));
  }
  // Function to process the JSON response before being rendered to the page.
  renderDashboard() {
    // Returns the above array map in a processed fashion.
    return this.state.dashboard.map(item => (
      // Uses the response id's as associative keys for the data.
      // Also parses the individual JSON entries via the param 'itemData'.
      <DashboardContent key={item.nid} itemData={item} />
    ));
  }

  // Finally render the content to the page.
  render() {
    const deviceWidth = Dimensions.get('window').width;
    // For debugging.

    // The actual output rendered, in the form of a return function.
    return (
      // Allow the user to scroll down the content.
      <ScrollView>
        <View style={styles.testView}>
          {/* Calls the above render function */}
          {this.renderDashboard()}

          {/* Hardcoded as these two do not have API feeds to control their output */}
          <TouchableOpacity
            onPress={() => {
              Actions.BreatheView();
            }}
          >
            <View style={{ width: deviceWidth / 2, height: deviceWidth / 2 }}>
              <Tile background="#666666">
                <Image
                  style={[styles.iconStyle, { tintColor: '#006064' }]}
                  source={{
                    uri:
                      'https://dev-mk-6.pantheonsite.io/sites/default/files/mk6-home-icons-08.png',
                  }}
                />
                <Text style={styles.tileContentStyle}>Breathe</Text>
              </Tile>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              Actions.ScrapbookView();
            }}
          >
            <View style={{ width: deviceWidth / 2, height: deviceWidth / 2 }}>
              <Tile background="#2f2f2f">
                <Image
                  style={[styles.iconStyle, { tintColor: '#006064' }]}
                  source={{
                    uri:
                      'https://dev-mk-6.pantheonsite.io/sites/default/files/mk6-home-icons-07.png',
                  }}
                />
                <Text style={styles.tileContentStyle}>Scrapbook</Text>
              </Tile>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

// Imports as default view for '../App'.
export default DashboardView;
