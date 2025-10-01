import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import AppStack from './src/services/navigation/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <AppStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
