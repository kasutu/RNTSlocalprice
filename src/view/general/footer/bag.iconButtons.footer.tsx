import React from 'react';
import { Box, HStack, IconButton, Pressable, Text, Center } from 'native-base';
import { FooterProps } from '../../../types/footerProps.type';
import {
  hollowNotifIcon,
  hollowChatIcon,
  hollowProfileIcon,
  hollowHomeIcon,
  solidBagIcon
} from '../icons/localprice.icons';

export default function BagIconButtonsFooter({ onPressHandler }: FooterProps) {
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
              icon={solidBagIcon}
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
              icon={hollowProfileIcon}
              onPress={
                onPressHandler ? onPressHandler : () => console.log('Profile')
              }
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
