import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import SignUp from './Components/SignUp'
import StartPage from "./Components/StartPage"
import Login from "./Components/Login"
import StartRec from './Components/StartRec'
import Screen from './Components/Screen'
import Recordings from './Components/Recordings'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='StartPage'>
      <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="Login" component={Login} />
    
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="StartRec" component={StartRec} />
        <Stack.Screen name="Screen" component={Screen} />
        <Stack.Screen name="Recordings" component={Recordings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

