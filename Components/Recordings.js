import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function Recordings() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Recording');
    const { sound } = await Audio.Sound.createAsync( require('../assets/Female Hello.mp4')
    );
    setSound(sound);

    console.log('Playing Recording');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Recording');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      <Button title="Play Recording" onPress={playSound} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});