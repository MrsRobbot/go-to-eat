import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Experience from './pages/Experience';
import HowItWork from './pages/HowItWork';
import Welcome from './pages/Welcome';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Accueil from './pages/Accueil'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurants from './pages/Restaurants';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="HowItWork" component={HowItWork} options={{headerShown: false}} />
        <Stack.Screen name="Experience" component={Experience} options={{headerShown: false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Accueil" component={Accueil} options={{headerShown: false}} />
        <Stack.Screen name="Restaurants" component={Restaurants} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
