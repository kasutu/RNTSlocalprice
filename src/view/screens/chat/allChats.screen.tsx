import {
  NativeBaseProvider,
  VStack,
  HStack,
  Box,
  ScrollView,
  Center
} from 'native-base';
import React from 'react';
import ChatIconButtonsFooter from '../../general/footer/chat.iconButtons.footer';
import { TitleHeader } from '../../general/header/headers';
import { ChatFilterButtons } from '../home/filterBtnsComponent';
import FilterButton from '../home/filterButton';
import { HCardChat } from './HCard.chat';

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

            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
            <HCardChat />
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
