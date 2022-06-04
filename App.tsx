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
  SearchContactScreen,
  SellOrEditItemScreen,
  ShoppingBagScreen,
  AllChatsScreen,
  ChatScreen
} from './src/view/screens/index.screens';
import AppTest from './test/App.test';
import { NativeBaseProvider } from 'native-base';
import Authentication from './src/api/firebase/authentications';

// #######################
// SWITCH TO DEV MODE?
// set DEV_MODE to true
// if you want to try some screens go to controller/screenInprogress and put your screen
export const DEV_MODE = true;
// #######################

const Stack = createNativeStackNavigator();
const authentication = new Authentication();

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
          <Stack.Screen name="LogInScreen">
            {(props) => <LogInScreen {...props} auth={authentication} />}
          </Stack.Screen>

          <Stack.Screen name="ProfileScreen">
            {(props) => <ProfileScreen {...props} auth={authentication} />}
          </Stack.Screen>
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
