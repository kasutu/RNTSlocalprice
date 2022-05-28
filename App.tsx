import React from 'react';

import type { ReactNode } from 'react';
import AddLocationMap from './src/screens/userSeller/addLocationMap.screen';
import EditAddressScreenUserSeller from './src/screens/userSeller/editAddressScreen.userSeller';
import ReportUser from './src/screens/userSeller/reportUser.screen';
import SellOrEditItem from './src/screens/userSeller/seller/sellOrEditItem.seller';
import LogInView from './src/screens/logIn/logInView.logIn';
import RegisterView from './src/screens/register/registerView.register';
import ResetPasswordView from './src/screens/resetPassword/resetPasswordView.resetPassword';
import MainHome from './src/screens/home/main.home';
import ItemView from './src/screens/itemView/itemView';
import ProfileView from './src/screens/profile/profileView.profile';
import ShoppingBag from './src/screens/shopping/shoppingBag.screen';
import DbTest from './test/dbTest';
import UserChatScreen from './src/screens/ChatScreen/user.chat.screen';
import UserSearchContact from './src/screens/ChatScreen/user.SearchContact';
import { HStack, NativeBaseProvider, ScrollView, VStack } from 'native-base';

export default function App(): ReactNode {
  return (
    <>
      {/* <ItemView /> */}
      {/* <ShoppingBag /> */}
      {/* <AddLocationMap /> */}
      {/* <EditAddressScreenUserSeller /> */}
      {/* <ReportUser /> */}
      {/* <SellOrEditItem /> */}
      {/* <LogInView /> */}
      {/* <RegisterView /> */}
      {/* <ResetPasswordView /> */}
      {/* <ProfileView /> */}
      {/* <MainHome /> */}
      {/* <UserChatScreen /> */}
      <UserSearchContact />

      {/* -------------- test section -------------- */}

      {/* <DbTest /> */}
    </>
  );
}
