import React from 'react';

import type { ReactNode } from 'react';
import AddLocationMap from './src/screens/userSeller/addLocationMap.screen';
import HomeView from './src/screens/home/homeview.home';
import EditAddressScreenUserSeller from './src/screens/userSeller/editAddressScreen.userSeller';
import ReportUser from './src/screens/userSeller/reportUser.screen';
import SellOrEditItem from './src/screens/userSeller/seller/sellOrEditItem.seller';
import TextInput from './src/components/forms/textInput.form';
import LogInView from './src/screens/logIn/logInView.logIn';
import RegisterView from './src/screens/register/registerView.register';
import ResetPasswordView from './src/screens/resetPassword/resetPasswordView.resetPassword';

export default function App(): ReactNode {
  return (
    <>
      {/* <HomeView /> */}

      {/* <AddLocationMap /> */}
      {/* <EditAddressScreenUserSeller /> */}
      <ReportUser />
      {/* <SellOrEditItem /> */}

      {/* <LogInView/> */}
      {/* <RegisterView/> */}
      {/* <ResetPasswordView/> */}
      </>
  );
}
