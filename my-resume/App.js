import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResumeFormScreen from './screens/ResumeForm'
import ResumeDetailScreen from './screens/ResumeDetail'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ResumeForm" options={{ title: 'Resume Form'}} component={ResumeFormScreen} />
        <Stack.Screen name="ResumeDetail" options={{ title: 'Resume Detail'}} component={ResumeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;