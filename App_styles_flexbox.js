import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ColorPropType
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.viewControl, styles.red]}>
        <Text>1</Text>
      </View>
      <View style={viewBlue}>
        <Text>2</Text>
      </View>
      <View style={[styles.viewControl, styles.green]}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row'
  },
  green: {
    backgroundColor: 'green'
  },
  red: {
    backgroundColor: 'red'
  },
  blue: {
    backgroundColor: 'blue'
  },
  viewControl: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const viewBlue = { ...styles.viewControl, ...styles.blue };
