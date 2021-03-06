import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BottomNav from '../components/BottomNav';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#cdfab1', '#cdfab1', '#84ce43']}
      style={styles.linearGradient}
    >
      <Text style={styles.homeText}>Home Screen</Text>
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
  homeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  bottomNav: {
    marginBottom: 20,
  },
});

export default HomeScreen;
