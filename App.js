import React from 'react';
//import Onboarding from './src/screens/Onboarding';
import { View, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
//import ForgotPassword from './src/screens/ForgotPassword';

const App = () => {
  return (
    <View style={styles.container}>
     {/* <Onboarding /> */}
     <Login/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
