import React from 'react';
import { StyleSheet, View } from 'react-native';
import LandingScreen from './Components/LandingScreen/LandingScreen'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import { createStackNavigator } from 'react-navigation';
import reducer from './Reducers/reducer';

const requestClient = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  responseType: 'json'
});

const clientOptions = {
  interceptors: {
    request: [({getState, dispatch, action}, config) => {
      console.log('request interceptor working');
      return config;
    }],
    response: [({getState, dispatch, action}, response) => {
      console.log('response interceptor working only for 200')
      return response;
    }]
  },
  onError: ({ action, next, error, getState, dispatch }, actionOptions) => {
    console.log('400,500 response goes here');
    console.log('i even can dispatch action in here');
  }
}

const store = createStore(
  reducer,
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk,
    axiosMiddleware(requestClient, clientOptions)
  )
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LandingScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24041A',
    marginTop: 40,
    justifyContent: 'flex-end'
  },
});
