import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Experience from './pages/Experience';
import HowItWork from './pages/HowItWork';
import Welcome from './pages/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="HowItWork" component={HowItWork} options={{headerShown: false}} />
        <Stack.Screen name="Experience" component={Experience} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
