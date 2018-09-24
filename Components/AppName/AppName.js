import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppName() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>HobbyIt</Text>
      <Text style={styles.appTagLine}>HOBBY.IT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    color: 'white',
    fontSize: 30,
  },
  appTagLine: {
    marginTop: 5,
    color: 'white',
    fontStyle: 'italic'
  },
  humanImage: {
    marginTop: 100,
    width: 24,
    height: 24
  }
})