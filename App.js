/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import devToolsEnhancer from 'remote-redux-devtools'

import reducers from './src/reducers'
import Window from './src/containers/Window'

const init_state = {}

export default class MyApp extends Component {
  store = createStore(reducers, init_state, devToolsEnhancer())

  render() {
    return (
      <Provider store={this.store}>
        <Window/>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
   flex: 1,
 },
})
