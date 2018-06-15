/**
 * The view that outputs primary navigation tiles.
 *
 * Extended description and documentation provided with inline comments.
 */

import React, { Component } from 'react';
import { ScrollView, View, Text, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../../Button';
import Input from '../../Input';

class ScrapbookCreate extends Component {
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="always">
        <Input label="Note Title" placeholder="Note Title" />
        <Input label="Note Body" placeholder="Note Body" />
        <Button onPress={() => Actions.pop()}>Add</Button>
      </ScrollView>
    );
  }
}

export default ScrapbookCreate;
