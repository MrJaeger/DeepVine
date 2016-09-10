import React, { Component } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native'

var styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});

class VineUsers extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.state.users.length}
        </Text>
      </View>
    );
  }
}

module.exports = VineUsers;
