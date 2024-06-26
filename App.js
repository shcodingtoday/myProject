import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import MapView from 'react-native-maps';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>My fi rst </Text>

      {/* <MapView
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const Dot = (diameter) => {
  return (
    <View style={{
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: 'red'
    }} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
