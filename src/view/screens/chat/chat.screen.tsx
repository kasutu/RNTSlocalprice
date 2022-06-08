import React, { useEffect } from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  ScrollView,
  StatusBar,
  VStack
} from 'native-base';
import { ChatHeaderAvatar } from './HeaderAvatar.chat';
import { ChatFooter } from './footer.chat';
import convoStore from '../../../model/convoStore/convoStore';
import BubbleRenderer from './bubbleRenderer';
import { runInAction } from 'mobx';

export function ChatScreen() {
  const currentUser = 'jiv';
  const convoOwners = {
    buyerName: 'jam',
    sellerName: 'jiv'
  };

  useEffect(() => {
    runInAction(() => {
      convoStore.badge = 'confirmed';
      convoStore.otherUser = convoOwners.buyerName;
      convoStore.owners = convoOwners;
      convoStore.currentUser = currentUser;
      convoStore.init();
    });
  }, []);

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* header */}
        <ChatHeaderAvatar
          name={convoStore.otherUser}
          badge={convoStore.badge}
        />

        <ScrollView>
          {/* body */}
          <VStack padding={2} space={2}>
            {/* A loop that returns an array of chat bubbles */}
            <Center flex={1}>
              <VStack width={'full'} height={'full'}>
                <BubbleRenderer />
              </VStack>
            </Center>
          </VStack>
        </ScrollView>

        {/* footer */}
        <ChatFooter />
      </Box>
    </NativeBaseProvider>
  );
}
