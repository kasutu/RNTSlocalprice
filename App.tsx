import React from 'react';

import type { ReactNode } from 'react';
import AddLocationMap from './src/screens/userSeller/addLocationMap.screen';
import HomeView from './src/screens/home/homeview.home';
import EditAddressScreenUserSeller from './src/screens/userSeller/editAddressScreen.userSeller';
import ReportUser from './src/screens/userSeller/reportUser.screen';
import SellOrEditItem from './src/screens/userSeller/seller/sellOrEditItem.seller';
import LogInView from './src/screens/logIn/logInView.logIn';
import RegisterView from './src/screens/register/registerView.register';
import ResetPasswordView from './src/screens/resetPassword/resetPasswordView.resetPassword';
import MainHome from './src/screens/home/main.home';
<<<<<<< HEAD
import ItemView from './src/screens/itemView/itemView';
=======
import ProfileView from './src/screens/profile/profileView.profile';
>>>>>>> f124cf4ee2e92db1787c35fc383ef4243c81f1f4

export default function App(): ReactNode {
  return (
    <>
      {/* <HomeView /> */}

      {/* <AddLocationMap /> */}
      {/* <EditAddressScreenUserSeller /> */}
      {/* <ReportUser /> */}
      {/* <SellOrEditItem /> */}

      {/* <LogInView/> */}
      {/* <RegisterView/> */}
      {/* <ResetPasswordView/> */}
<<<<<<< HEAD
      {/* <MainHome/> */}
      <ItemView/>
=======
      <MainHome/>
      {/* <ProfileView/> */}
>>>>>>> f124cf4ee2e92db1787c35fc383ef4243c81f1f4
      </>
  );
}