import React from 'react';

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
} from './src/components/screens/index.screens';
import AppTest from './test/App.test';

export default function App(): ReactNode {
  return (
    <>
      {/* <AppTest /> */}
      {/* <ItemScreen /> */}
      {/* <ShoppingBagScreen /> */}
      {/* <AddLocationMapScreen /> */}
      {/* <EditAddressScreen /> */}
      {/* <ReportUserScreen /> */}
      {/* <SellOrEditItemScreen /> */}
      {/* <LogInScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <ResetPasswordScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <MainHomeScreen /> */}
      {/* <AllChatsScreen /> */}
      {/* <SearchContactScreen /> */}
      <ChatScreen />
    </>
  );
}
