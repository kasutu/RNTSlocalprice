import React from 'react';
import Router from './src/controller/router';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import type { ReactNode } from 'react';

// #######################
// SWITCH TO DEV MODE?
// set DEV_MODE to true
// if you want to try some screens go to controller/screenInprogress and put your screen
export const DEV_MODE = true;
// #######################

export default function App(): ReactNode {
  return (
    <NativeBaseProvider>
      <Router />
    </NativeBaseProvider>
  );
}
