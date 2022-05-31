import React from 'react';
import { Box, HStack, IconButton, Pressable, Text, Center } from 'native-base';
import { FooterProps } from '../../../types/footerProps.type';
import {
  hollowNotifIcon,
  hollowBagIcon,
  hollowChatIcon,
  hollowHomeIcon,
  solidProfileIcon,
} from '../icons/localprice.icons';

export default function ProfileIconButtonsFooter({ onPressHandler }: FooterProps) {
  return (
    <>
      <Box safeAreaBottom />
      <Center>
        <HStack alignItems="center" space={4}>
          <Pressable>
            <IconButton
              icon={hollowHomeIcon}
              onPress={
                onPressHandler ? onPressHandler : () => console.log('Home')
              }
            />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
            >
              Home
            </Text>
          </Pressable>
          <Pressable>
            <IconButton
              icon={hollowChatIcon}
              onPress={
                onPressHandler ? onPressHandler : () => console.log('Chat')
              }
            />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
            >
              Chat
            </Text>
          </Pressable>
          <Pressable>
            <IconButton
              icon={hollowBagIcon}
              onPress={
                onPressHandler ? onPressHandler : () => console.log('Bag')
              }
            />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
            >
              Bag
            </Text>
          </Pressable>
          <Pressable>
            <IconButton
              icon={hollowNotifIcon}
              onPress={
                onPressHandler ? onPressHandler : () => console.log('Notif')
              }
            />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
            >
              Notif
            </Text>
          </Pressable>
          <Pressable>
            <IconButton
              icon={solidProfileIcon}
            />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
            >
              Me
            </Text>
          </Pressable>
        </HStack>
      </Center>
    </>
  );
}
