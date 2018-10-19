import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppName from '../../AppName/AppName';
import SignIn from '../../SignIn/SignIn';
import HomeScreen from '../HomeScreen/HomeScreen';
import { StackNavigator } from 'react-navigation';

export default NavigationScreens = StackNavigator(
  { LandingScreen, HomeScreen },
  { initialRouteName: 'LandingScreen' }
);

class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppName />
        <SignIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24041A',
    marginTop: 20,
    justifyContent: 'flex-end'
  },
});
