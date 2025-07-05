import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
   
      <ImageBackground
        source={require('../assets/union.png')}
        style={styles.topHalf}
        resizeMode="cover"
      >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Forgot Password</Text>
      </ImageBackground>

      <View style={styles.bottomHalf}>
        {/* Phone Number Field */}
        <View>
          <Text style={styles.label}>Phone Number</Text>
          <View style={styles.inputRow}>
            <Text style={styles.countryCode}>+91</Text>
            <TextInput
              style={styles.input}
              placeholder="9812345678"
              keyboardType="phone-pad"
              placeholderTextColor="#D1D1D1"
            />
          </View>
        </View>

             {/* Sign In Button */} 
    <View style={{ marginTop: 100 }}>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.generateotp}>Generate OTP</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
    </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topHalf: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#462EAF',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 110,
    marginBottom: 50,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
    marginTop: '0',
  },
  bottomHalf: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  label: {
    marginTop: 16,
    marginBottom: 6,
    fontWeight: '600',
    fontSize: 18,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  countryCode: {
    fontSize: 20,
    fontWeight: '800',
    marginRight: 8,
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: 20,
    color: '#000',
  },
  signInButton: {
    backgroundColor: '#3FAC49',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 80,
    alignItems: 'center',
  },

});
