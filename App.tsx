import React, { useEffect } from 'react';
import Router from './src/controller/router';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import type { ReactNode } from 'react';
import { userPersistDataStore } from './src/model/localPersistUserDataStore.ts/localPersistDataStore';

// #######################
// SWITCH TO DEV MODE?
// set DEV_MODE to true
// if you want to try some screens go to controller/screenInprogress and put your screen
export const DEV_MODE = false;
// #######################

export default function App(): ReactNode {
  useEffect(() => {
    // storeData('user', null);
    userPersistDataStore.fetch();
    console.log(userPersistDataStore.persist);
  }, []);

  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
}
