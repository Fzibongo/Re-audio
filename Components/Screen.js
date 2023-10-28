import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function RecorderList() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.DoneText}>Done</Text>
      </TouchableOpacity>

      <Image style={styles.Img} source={require('../assets/Speaker.jpg')} />
      <TouchableOpacity style={styles.btn}></TouchableOpacity>

      <Image style={styles.Img} source={require('../assets/Audio.jpg')} />
      <TouchableOpacity style={styles.btn1}></TouchableOpacity>
      <View style={styles.button}>
        <TouchableOpacity style={styles.btn}>
          {' '}
          <Text style={styles.RecText}>Rec</Text>
          <Image
            style={styles.Start}
            source={require('../assets/icons8-record-48.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          {' '}
          <Text style={styles.PlayText}>Play</Text>{' '}
          <Image
            style={styles.Play}
            source={require('../assets/icons8-play-50.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}></TouchableOpacity>

        <TouchableOpacity style={styles.btn3}>
          <Text style={styles.StopText}>Stop</Text>
          <Image
            style={styles.Play}
            source={require('../assets/icons8-stop-48.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn3}>
          <Text style={styles.StopText}>Save</Text>
          <Image
            style={styles.Play}
            source={require('../assets/icons8-save-48.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    paddingBottom: 15,
    marginLeft: 10,
  },

  Img: {
    marginLeft: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
  },

  RecText: {
    marginLeft: 10,
  },

  btn2: {
    marginLeft: 10,
  },

  PlayText: {
    marginLeft: 20,
  },

  StopText: {
    marginLeft: 10,
  },
  container: {
    backgroundColor: '#c5caca',
    borderRadius: 20,
  },
})