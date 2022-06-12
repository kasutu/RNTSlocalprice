import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CheckoutScreen,
  OrderDetailsScreen,
  ShoppingBagScreen
} from '../../view/screens/index.screens';

const Stack = createNativeStackNavigator();

export function CheckoutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'ShoppingBagScreen'}
    >
      <Stack.Screen name="ShoppingBagScreen" component={ShoppingBagScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      <Stack.Screen name="OrderDetailsScreen" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}
