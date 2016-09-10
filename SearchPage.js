'use strict';

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

var Colors = require('./Colors.js')
var VineApi = require('./api/Vine.js')
var VineUsers = require('./VineUsers.js')

var styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: Colors.vineBrand,
    borderColor: Colors.vineBrand,
    borderRadius: 8,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Colors.white,
  },
  container: {
    alignItems: 'center',
    marginTop: 65,
    padding: 30,
  },
  description: {
    color: Colors.darkText,
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  flowRight: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  searchInput: {
    borderColor: Colors.darkText,
    borderRadius: 8,
    borderWidth: 1,
    color: Colors.darkText,
    flex: 4,
    fontSize: 16,
    height: 36,
    marginRight: 5,
    padding: 4,
  },
  'title': {
    color: Colors.vineBrand,
    fontSize: 24,
    marginBottom: 20,
  }
});

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      users: [],
    };
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text });
  }

  onSearchPressed() {
    VineApi
      .searchUsers(this.state.searchString)
      .then((response) => {
        var jsonResponse = JSON.parse(response._bodyInit);
        this.setState({
          users: jsonResponse.data.records.slice(0, 10)
        });
      });
  }

  render() {
    var userResults = (
      this.state.users.length ?
      <VineUsers
        users={this.state.users}
      ></VineUsers> :
      <Text></Text>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Deep Vine
        </Text>
        <Text style={styles.description}>
          Turn a Vine into a piece of art
        </Text>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            value={this.state.searchString}
            onChange={this.onSearchTextChanged.bind(this)}
            placeholder='Search via username'
          />
          <TouchableHighlight
            onPress={this.onSearchPressed.bind(this)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        {userResults}
      </View>
    );
  }
}

module.exports = SearchPage;
