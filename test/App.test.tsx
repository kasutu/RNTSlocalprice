import DbTest from './dbTest';
import React from 'react';
import ScreenATest from './screens/screenA.test';
import ScreenB from './screens/screenB.test';
import ScreenC from './screens/screenC.test';
import { ChatScreen } from '../src/components/screens/index.screens';
import { NativeBaseProvider } from 'native-base';

export default function AppTest() {
  return (
    <NativeBaseProvider>
      {/* -------------- test section -------------- */}
      {/* <ScreenATest /> */}
      {/* <ScreenB /> */}
      {/* <ScreenC /> */}
      {/* <DbTest /> */}
      <ChatScreen />
    </NativeBaseProvider>
  );
}
