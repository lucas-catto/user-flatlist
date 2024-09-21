
import * as React from 'react';
import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProgrammersScreen              from './Components/ProgrammersScreen';
import ProgrammerDetailScreen         from './Components/ProgrammerDetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Programmers'>
        <Stack.Screen name='Programmers' component={ProgrammersScreen} />
        <Stack.Screen name='ProgrammerDetail' component={ProgrammerDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
