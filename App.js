import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    console.log('test')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});