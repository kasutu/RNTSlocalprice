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

const chats: { senderId: string; text: string }[] = [
  { senderId: 'buyer', text: 'Hoy banu dali di bala may hambal ako simo' },
  { senderId: 'buyer', text: 'pre' },
  { senderId: 'seller', text: 'ano pre?' },
  { senderId: 'buyer', text: 'ganda ng gf mo pre' },
  { senderId: 'seller', text: 'buslot gid kilid mo sakon' },
  { senderId: 'buyer', text: 'may sugid ako simo' },
  { senderId: 'seller', text: 'hipos kada ah' },
  { senderId: 'seller', text: 'di gani ma labutaw' },
  { senderId: 'buyer', text: 'seryosoo' },
  { senderId: 'buyer', text: 'balion moko kun mag labutaw ko ??' },
  { senderId: 'seller', text: 'sigi andaman molang' },
  { senderId: 'buyer', text: 'ako si batman' },
  { senderId: 'seller', text: 'andaman molang mag kitaay ta sa gate' },
  { senderId: 'buyer', text: 'pre naman' },
  { senderId: 'seller', text: 'bala kada hmmmpp' },
  { senderId: 'buyer', text: 'babeee huhuhhu' },
  { senderId: 'seller', text: 'sunggod ko tsk' }
];

export function ChatScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* header */}
        <ChatHeaderAvatar />

        <ScrollView>
          {/* body */}
          <VStack padding={2} space={2}>

            {/* A loop that returns an array of chat bubbles */}

            {
              chats.map((chat) => {
                if (chat.senderId === 'buyer') {
                  return <ChatBubbleLeft key={chat.text} content={chat.text} />;
                } else {
                  return <ChatBubbleRight key={chat.text} content={chat.text} />;
                }
              })
            }

          </VStack>
        </ScrollView>

        {/* footer */}
        <ChatFooter />
      </Box>
    </NativeBaseProvider>
  );
}
