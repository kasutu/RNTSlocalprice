import DbTest from './dbTest';
import React from 'react';
import ScreenATest from './screens/screenA.test';
import ScreenB from './screens/screenB.test';
import ScreenC from './screens/screenC.test';
import { NativeBaseProvider } from 'native-base';
import { ChatScreenTest } from './screens/chat/chat';

export default function AppTest() {
  return (
    <NativeBaseProvider>
      {/* -------------- test section -------------- */}
      <ScreenATest />
      <ScreenB />

      {/* <ChatScreenTest /> */}
    </NativeBaseProvider>
  );
}
