import { NativeBaseProvider, ScrollView, VStack } from 'native-base';
import React from 'react';
import DbTest from './dbTest';
import ScreenATest from './screens/screenA.test';
import ScreenB from './screens/screenB.test';
import ScreenC from './screens/screenC.test';

export default function AppTest() {
  return (
    <>
      {/* -------------- test section -------------- */}

      <NativeBaseProvider>
        <ScreenATest />
        <ScreenB />
        <ScreenC />
        <DbTest />
      </NativeBaseProvider>
    </>
  );
}
