import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enterGoalText) => {
    setEnteredGoal(enterGoalText);
  };

  const addGoadHandler = () => {
    console.log(enteredGoal);
    
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //if you use () behind fn name that would execute fn
          //Use only name to tell that should execute for every keystroke
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoadHandler} />
      </View>
      <ScrollView>
        {/* key = goal means cant crate same goal in app */}
        <Text>{courseGoals}</Text>
          {courseGoals.map((goal) => ( 
            <View key={goal} style={styles.listItem}>
              <Text >{goal}</Text>
            </View>))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
