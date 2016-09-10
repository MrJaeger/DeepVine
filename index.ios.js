'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
  View
} from 'react-native';
var SearchPage = require('./SearchPage');

var styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class DeepVineApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Deep Vine',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('DeepVine', () => DeepVineApp);
