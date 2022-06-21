import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { Menu } from '../components/Menu/Menu';
import Home from '../containers/Home';
import { navigationRef } from '../utils/navigationRef';
import { RoutesParams } from './navigation-utilities';

const Stack = createNativeStackNavigator<RoutesParams>();

function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false, presentation: 'transparentModal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
