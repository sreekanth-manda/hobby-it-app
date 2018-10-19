import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
export class HomeScreen extends Component() {
  render() {
    return (
      <Text>Hello</Text>
    );
  }
}

export default createStackNavigator({
  Home: {
    screen: HomeScreen
  },
})