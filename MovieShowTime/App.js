import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoviesDetail from './screens/MoviesDetail'
import MoviesList from './screens/MoviesList'

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions = {{
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTintColor: 'white',
        shadowOpacity: 0
      }}
    >
      <Stack.Screen
        name="MoviesList"
        component={MoviesList}
        options={{
          title: null,
          headerTruncatedBackTitle: null
        
        }}
      />
      <Stack.Screen
        name="MoviesDetail"
        component={MoviesDetail}
        options={{
          title: null,
          headerTruncatedBackTitle: null
        
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)


export default function App() {
  return ( 
    <View style={styles.container}>
      <Navigation/>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
