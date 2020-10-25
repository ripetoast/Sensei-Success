import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import HabitTrackerScreen from './src/screens/HabitTrackerScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import TasksScreen from './src/screens/TasksScreen';
import TimeTrackerScreen from './src/screens/TimeTrackerScreen';
import ToDoListScreen from './src/screens/ToDoListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HabitTracker" component={HabitTrackerScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="Tasks" component={TasksScreen} />
        <Stack.Screen name="TimeTracker" component={TimeTrackerScreen} />
        <Stack.Screen name="ToDoList" component={ToDoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
