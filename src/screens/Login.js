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
      {/* Top Section with Logo and Title */}
      <ImageBackground
        source={require('../assets/union.png')}
        style={styles.topHalf}
        resizeMode="cover"
      >
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Sign In</Text>
      </ImageBackground>

      {/* Bottom Section with Inputs */}
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

        {/* Password Field */}
        <View style={{ marginTop: 12 }}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.inputRow}
            placeholder="************"
            placeholderTextColor="#D1D1D1"
            secureTextEntry
          />
        </View>

        {/* Sign In Button */}
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotText}>Forgot Password</Text>
        </TouchableOpacity>
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
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
    marginTop: 50,
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
    fontWeight: '500',
    fontSize: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
    color: '#000',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  signInButton: {
    backgroundColor: '#3FAC49',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 80,
    alignItems: 'center',
  },
  signInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  forgotText: {
    color: '#E5357B',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
});
