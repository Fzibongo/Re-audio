import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function StartPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.Img}
        source={require('../assets/icons8-mic-50.png')}
      />

      <Text style={styles.WelcomeText}> WELCOME TO </Text>

      <Text style={styles.Welcomeapp}>
        {' '}
        <Text style={styles.MusicHeading}> Music </Text>{' '}
        <Text style={styles.AppText}>App</Text>{' '}
      </Text>

      <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.LoginText}>LogIn</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.LoginText}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.biometric}>
          Or quick login {'\n'} with Touch ID
        </Text>

        <Image
          style={styles.fingerprint}
          source={require('../assets/icons8-fingerprint-50.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Img: {
    width: 150,
    height: 150,
  },
  WelcomeText: {
    color: 'black',
    fontSize: 15,
    paddingTop: 30,
  },
  Welcomeapp: {
    color: 'black',
    fontSize: 35,
    paddingBottom: 50,
  },
  MusicHeading: {
    fontWeight: 'bold',
  },
  AppText: {
    marginRight: 40,
  },
  btn: {
    width: 170,
    height: 40,
    backgroundColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  LoginText: {
    color: 'white',
  },
  biometric: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  fingerprint: {
    marginTop: 20,
  },
});

export default StartPage;
