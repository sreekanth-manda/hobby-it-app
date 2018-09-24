import React, { Component } from 'react';
import { View, Alert, Button, Text, TextInput, StyleSheet } from 'react-native';
import HomeScreen from '../HomeScreen/HomeScreen';
import getHobbies from '../../Actions/LoginScreenActions';
import { connect } from 'react-redux';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'sree',
      password: 'password'
    }
  };

  signIn = async () => {
    if (this.state.username === 'S' &&
        this.state.password === 'S') {
          this.props.getHobbies();
          console.log('Sree', this.props.hobbies.length);
          this.props.hobbies.length !== 0 && <HomeScreen hobbies={thishobbies}/>
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.fields}
          onChangeText={(text) => this.setState({ username: text })}
          placeholder={'username'}
        />
        <TextInput
          style={styles.fields}
          onChangeText={(text) => this.setState({ password: text })}
          placeholder={'password'}
        />
        <Button onPress={this.signIn} title={'Sign In'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  fields: {
    backgroundColor: 'white',
    margin: 5,
    width: 250,
    padding: 5,
    backgroundColor: 'white',
  }
});

const mapStateToProps = state => {
  let customerHobbies = state.hobbies.map(hobby => ({ key: hobby.id, ...hobby }));
  return {
    hobbies: customerHobbies
  };
};

const mapDispatchToProps = {
  getHobbies
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);