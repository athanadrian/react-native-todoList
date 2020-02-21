import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const GoalInput = ({ onHandleAddGoal, onHandleCancelAddGoal, visible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const handleInputGoal = enteredText => {
    setEnteredGoal(enteredText);
  };

  const onAddGoal = () => {
    onHandleAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  const onCancelAddGoal = () => {
    onHandleCancelAddGoal();
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInputGoal}
          style={styles.input}
          placeholder='enter your goal'
          value={enteredGoal}
        />
        {/* <Button onPress={() => onHandleAddGoal(enteredGoal)} title='ADD' /> */}
        <View style={styles.buttonsGroup}>
          <View style={styles.button}>
            <Button onPress={onAddGoal} title='ADD' />
          </View>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancelAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    color: 'black',
    height: 30
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%'
  },
  button: {
    width: '40%'
  }
});

export default GoalInput;
