import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import GoalItem from './GoalItem';

const GoalList = ({ goals, onHandleDeleteGoal }) => {
  return (
    <FlatList
      //keyExtractor={(item, index) => item.id}
      data={goals}
      renderItem={itemData => (
        <GoalItem onHandleDeleteGoal={onHandleDeleteGoal} {...itemData.item} />
      )}
    />
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

export default GoalList;
