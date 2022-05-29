import React from 'react';

import type { ReactNode } from 'react';
import AddLocationMap from './src/components/screens/userSeller/addLocationMap.screen';
import EditAddressScreenUserSeller from './src/components/screens/userSeller/editAddressScreen.userSeller';
import ReportUser from './src/components/screens/userSeller/reportUser.screen';
import SellOrEditItem from './src/components/screens/userSeller/seller/sellOrEditItem.seller';
import LogInView from './src/components/screens/logIn/logInView.logIn';
import RegisterView from './src/components/screens/register/registerView.register';
import ResetPasswordView from './src/components/screens/resetPassword/resetPasswordView.resetPassword';
import MainHome from './src/components/screens/home/main.home';
import ItemView from './src/components/screens/itemView/itemView';
import ProfileView from './src/components/screens/profile/profileView.profile';
import ShoppingBag from './src/components/screens/shopping/shoppingBag.screen';
import DbTest from './test/dbTest';
import UserChatScreen from './src/components/screens/ChatScreen/user.chat.screen';
import UserSearchContact from './src/components/screens/ChatScreen/user.SearchContact';
import { HStack, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import ScreenA from './test/screens/screenA.test';
import ScreenB from './test/screens/screenB.test';
import ScreenC from './test/screens/screenC.test';

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
      {/* <UserSearchContact /> */}

      {/* -------------- test section -------------- */}

      {/* <DbTest /> */}
      <NativeBaseProvider>
        <ScreenA />
        <ScreenB />
        <ScreenC />
      </NativeBaseProvider>
    </>
  );
}
