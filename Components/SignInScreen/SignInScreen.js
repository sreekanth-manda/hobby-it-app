import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import LoginScreen from '../LoginScreen/LoginScreen';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isLoginShown: false
    }
  }

  onClickSign = () => {
    this.setState(() => {
      return { isLoginShown: true }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoginShown && <LoginScreen />}
        {!this.state.isLoginShown &&
          <View>
            <TouchableOpacity onPress={this.onClickSign}>
              <Image style={styles.humanImage} source={require('../../Assets/Images/Human.png')} />
            </TouchableOpacity>
            <Text style={styles.signInText}>Sign In</Text>
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10
  },
  signInText: {
    marginTop: 5,
    marginBottom: 50,
    color: 'white',
    fontSize: 10,
  },
  humanImage: {
    width: 28,
    height: 28
  }
})