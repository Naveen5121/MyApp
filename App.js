import React from 'react';
import Onboarding from './src/screens/Onboarding';
import { View, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import EnterOtp from './src/screens/EnterOtp';
import NewPassword from './src/screens/NewPassword';
import AutoFillOtp from './src/screens/AutoFillOtp';
import Menu from './src/screens/Menu';
import Profile from './src/screens/Profile';
import { Calendar } from 'react-native-calendars';



const App = () => {
  return (
    <View style={styles.container}>
     {/* <Onboarding /> */}
     <Calendar/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
