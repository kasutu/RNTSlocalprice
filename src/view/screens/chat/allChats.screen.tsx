import {
  NativeBaseProvider,
  VStack,
  HStack,
  Box,
  ScrollView
} from 'native-base';
import React from 'react';
import { TitleHeader } from '../../general/header/headers';
import { ChatCardRenderer } from '../../render/chatCard.render';
import { ChatFilterButtons } from '../home/filterBtnsComponent';

export function AllChatsScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Chat" />

        {/* Select all order status row */}

        <ChatFilterButtons />

        {/* Username and Message */}
        <ScrollView>
          <VStack flex={1} width={'full'}>
            {/* MAKE A LOOP THAT RETURNS THE CHAT CARD */}

            <ChatCardRenderer />
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
