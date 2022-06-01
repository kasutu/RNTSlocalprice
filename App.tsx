import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type { ReactNode } from 'react';
import {
  AddLocationMapScreen,
  EditAddressScreen,
  ItemScreen,
  LogInScreen,
  MainHomeScreen,
  ProfileScreen,
  RegisterScreen,
  ReportUserScreen,
  ResetPasswordScreen,
  SearchContactScreen,
  SellOrEditItemScreen,
  ShoppingBagScreen,
  AllChatsScreen,
  ChatScreen
} from './src/view/screens/index.screens';
import AppTest from './test/App.test';
import { NativeBaseProvider } from 'native-base';
import { CheckoutScreen } from './src/view/screens/shopping/checkout.shopping';

// #######################
// SWITCH TO DEV MODE?
// set DEV_MODE to true
export const DEV_MODE = true;
// #######################

const Stack = createNativeStackNavigator();

export default function App(): ReactNode {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainHomeScreen} />
          <Stack.Screen name="AppTest" component={AppTest} />
          <Stack.Screen name="ItemScreen" component={ItemScreen} />
          <Stack.Screen
            name="ShoppingBagScreen"
            component={ShoppingBagScreen}
          />
          <Stack.Screen
            name="AddLocationMapScreen"
            component={AddLocationMapScreen}
          />
          <Stack.Screen
            name="EditAddressScreen"
            component={EditAddressScreen}
          />
          <Stack.Screen name="ReportUserScreen" component={ReportUserScreen} />
          <Stack.Screen
            name="SellOrEditItemScreen"
            component={SellOrEditItemScreen}
          />
          <Stack.Screen name="LogInScreen" component={LogInScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="AllChatsScreen" component={AllChatsScreen} />
          <Stack.Screen
            name="SearchContactScreen"
            component={SearchContactScreen}
          />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
