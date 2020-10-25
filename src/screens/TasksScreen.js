import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNav from '../components/BottomNav';

const TasksScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#cdfab1', '#cdfab1', '#84ce43']}
      style={styles.linearGradient}
    >
      <Text style={styles.mainText}>Tasks Screen</Text>
      <View style={styles.bottomNav}>
        <BottomNav navigation={navigation} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    justifyContent: 'space-between',
  },
  mainText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  bottomNav: {
    marginBottom: 20,
  },
});

export default TasksScreen;
