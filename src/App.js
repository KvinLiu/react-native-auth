import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Config } from '../firebase_config';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(Config);
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        <LoginForm />
      </View>
    )
  }
}

export default App;
