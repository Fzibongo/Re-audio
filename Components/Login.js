import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.img}
          source={require('../assets/icons8-mic-50.png')}
        />
        <Text style={styles.signInText}>
          <Text style={styles.signIn}>Sign in</Text>
          {'\n'}
          <Text style={styles.continue}>to continue</Text>
        </Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Your email"
        />
        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry={true}
        />
      </View>
      <View>
        <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate('StartRec')}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.passwordText}>Lost Password?</Text>
      </View>
      <View style={styles.signInLine} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.createAccountText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  img: {
    width: 150,
    height: 150,
  },
  signInText: {
    paddingBottom: 25,
    paddingTop: 20,
  },
  signIn: {
    fontWeight: 'bold',
  },
  continue: {},
  input: {
    height: 40,
    margin: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
  btn1: {
    width: 170,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingLeft: 60,
    paddingTop: 10,
    marginTop: 5,
  },
  loginText: {
    textAlign: 'center',
    marginRight: 60
  },
  passwordText: {
    paddingTop: 20,
    paddingBottom: 60,
    textAlign: 'center',
  },
  signInLine: {
    width: 100,
    borderTopWidth: 1,
    borderColor: 'black',
    paddingTop: 25,
  },
  createAccountText: {
    paddingTop: 20,
    textAlign: 'center',
  },
});

export default SignIn;
