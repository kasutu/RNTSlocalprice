import React from 'react';

import type { ReactNode } from 'react';
import AppTest from './test/App.test';
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
  UserChatScreen
} from './src/components/screens/index.screens';

export default function App(): ReactNode {
  return (
    <>
      <AppTest />
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
      {/* <UserChatScreen /> */}
      {/* <SearchContactScreen /> */}
    </>
  );
}
