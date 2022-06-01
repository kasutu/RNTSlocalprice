import React from 'react';
import type { ReactNode } from 'react';
import { NativeBaseProvider } from 'native-base';
import { ChatDetailsScreen } from './src/view/screens/chat/details.chat';

export default function AppTemp(): ReactNode {
  return (
    <NativeBaseProvider>
      <ChatDetailsScreen />
    </NativeBaseProvider>
  );
}
