import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const GoalItem = ({ id, value, onHandleDeleteGoal }) => {
  return (
    // {/* <TouchableHighlight/> */}
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onHandleDeleteGoal(id)}
    >
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  listItem: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10
  }
});
export default GoalItem;
