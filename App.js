import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Splash from './src/screens/Splash';

export default function App() {
  return (
    <View style={styles.container}>
      <Splash/>
    </View>
  );
}

const styles = StyleSheet.create({

});
