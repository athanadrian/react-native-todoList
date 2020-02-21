import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import GoalList from './components/GoalList';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  console.log(goals);
  const handleAddGoal = enteredGoal => {
    setGoals(prevGoals => [
      { id: Math.random().toString(), value: enteredGoal },
      ...prevGoals
    ]);
    setIsAddMode(false);
  };

  const handleDeleteGoal = goalId => {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== goalId);
    });
  };

  const handleIsAddMode = () => {
    setIsAddMode(true);
  };

  const handleCancelGoalAddition = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <Button title='Add new Goal' onPress={handleIsAddMode} />
      <GoalInput
        onHandleAddGoal={handleAddGoal}
        onHandleCancelAddGoal={handleCancelGoalAddition}
        visible={isAddMode}
      />
      {goals ? (
        <GoalList goals={goals} onHandleDeleteGoal={handleDeleteGoal} />
      ) : (
        // <FlatList
        //   keyExtractor={(item, index) => item.id}
        //   data={goals}
        //   renderItem={itemData => (
        //     <GoalItem title={itemData.item.value} />
        //   )}
        // />
        <View style={styles.listItem}>
          <Text>No Goals entered!!!!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  listItem: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10
  }
});
