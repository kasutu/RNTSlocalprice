import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItemScreen, MainHomeScreen } from '../../view/screens/index.screens';
import { CheckoutStack } from './checkoutStack';

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'MainHomeScreen'}
    >
      <Stack.Screen name="MainHomeScreen" component={MainHomeScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen name="CheckoutStack" component={CheckoutStack} />
    </Stack.Navigator>
  );
}
