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
import FilterButton from '../home/filterButton';
import { HCardChat } from './HCard.chat';

export function AllChatsScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Chat" />

        {/* Select all order status row */}

        <Center width={'full'} paddingY={'3'}>
          <HStack space={3}>
            {/* all filters must be sorted based on the latest activity */}

            {/* display all chat related to the user */}
            <FilterButton value="All" />

            {/* filters everything that has pending orders */}
            <FilterButton value="Orders" />

            {/* filters chats with completed status */}
            <FilterButton value="Completed" />

            {/* filters cancelled order */}
            <FilterButton value="Canceled" />
          </HStack>
        </Center>

        {/* Username and Message */}
        <ScrollView>
          <VStack flex={1} width={'full'}>
            {/* MAKE A LOOP THAT RETURNS THE CHAT CARD */}

            <HCardChat />
            <HCardChat />
            <HCardChat />
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
