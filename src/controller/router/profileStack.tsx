import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  EditAddressScreen,
  LogInScreen,
  ProfileScreen
} from '../../view/screens/index.screens';
import MapScreen from '../../view/screens/mapScreen/mapScreen';

const Stack = createNativeStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'ProfileScreen'}
    >
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="LogInScreen" component={LogInScreen} />
      <Stack.Screen name="EditAddressScreen" component={EditAddressScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
    </Stack.Navigator>
  );
}
