import React, { useEffect } from 'react';
import Router from './src/controller/router';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import type { ReactNode } from 'react';
import persistedUserData from './src/model/UserStore/persistedUserData';
import { storeData } from './src/api/mmkv';

// #######################
// SWITCH TO DEV MODE?
// set DEV_MODE to true
// if you want to try some screens go to controller/screenInprogress and put your screen
export const DEV_MODE = true;
// #######################

export default function App(): ReactNode {
  useEffect(() => {
    persistedUserData.cacheData();
  }, []);

  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
}
