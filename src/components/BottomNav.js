import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const BottomNav = ({ navigation }) => {
  console.log(navigation);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('TimeTracker')}>
        <Ionicons
          style={styles.icon}
          name="md-stopwatch"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
        <Ionicons style={styles.icon} name="ios-list" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ToDoList')}>
        <Ionicons
          style={styles.icon}
          name="ios-list-box"
          size={24}
          color="black"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('HabitTracker')}>
        <Ionicons style={styles.icon} name="ios-leaf" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Progress')}>
        <AntDesign
          style={styles.icon}
          name="barschart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 10,
  },
});

export default BottomNav;
