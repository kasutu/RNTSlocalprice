import React from 'react';
import {
  Box,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  VStack
} from 'native-base';
import { ChatHeaderAvatar } from './HeaderAvatar.chat';
import { ChatBubbleLeft, ChatBubbleRight } from './chatBubbles.chat';
import { ChatFooter } from './footer.chat';

export function ChatScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* header */}
        <ChatHeaderAvatar />

        <ScrollView>
          {/* body */}
          <VStack>
            <ChatBubbleLeft content="pre" />
            <ChatBubbleRight content="ano pre?" />
            <ChatBubbleLeft content="ganda ng gf mo pre" />
            <ChatBubbleRight content="buslot gid kilid mo sakon" />
          </VStack>
        </ScrollView>

        {/* footer */}
        <ChatFooter />
      </Box>
    </NativeBaseProvider>
  );
}
