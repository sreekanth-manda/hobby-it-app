import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppName from '../AppName/AppName';
import SignInScreen from '../SignInScreen/SignInScreen';
import LoginScreen from '../LoginScreen/LoginScreen';

export default class LandingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppName />
        <SignInScreen />
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
