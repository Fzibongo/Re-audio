import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

function SignUp({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create your account</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.SignUpText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.lineBox}>
        <View style={styles.line} />
        <Text style={styles.or}>or</Text>
        <View style={styles.line} />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Your name"
      />

      <TextInput
        style={styles.input}
        placeholder="Your email"
      />

      <TextInput
        style={styles.input}
        placeholder="Your password"
        secureTextEntry={true}
      />
      
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.SignUpText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.forgotpasswordText}>Already have an account? Sign in</Text>
      </TouchableOpacity>

      <View style={styles.signInLine}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    paddingTop: 10,
  },
  btn: {
    width: 200,
    backgroundColor: 'black',
    height: 40,
    borderRadius: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpText: {
    color: 'white',
  },
  lineBox: {
    flexDirection: 'row',
    marginTop: 20,
  },
  line: {
    width: 100,
    borderColor: 'black',
    borderTopWidth: 1,
  },
  input: {
    height: 40,
    margin: 10,
    borderBottomWidth: 1,
    padding: 5,
  },
  forgotpasswordText: {
    marginTop: 20,
  },
  or: {
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  signInLine: {
    width: 50,
    borderColor: 'black',
    borderTopWidth: 1,
    marginVertical: 20,
  },
});

export default SignUp;
