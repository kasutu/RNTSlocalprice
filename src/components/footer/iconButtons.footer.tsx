import React from 'react';
import { Box, HStack, IconButton, Pressable, Text } from 'native-base';
import { FooterProps } from '../../types/footerProps.type';
import {
  hollowNotifIcon,
  hollowBagIcon,
  hollowChatIcon,
  hollowHomeIcon,
  solidProfileIcon
} from '../../icons/localprice.icons';

export default function IconButtonsFooter({ onPressHandler }: FooterProps) {
  return (
    <>
      <Box safeAreaBottom />
      <HStack space={7} justifyContent={'center'} width={'full'}>
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
          <IconButton
            icon={hollowBagIcon}
            onPress={onPressHandler ? onPressHandler : () => console.log('Bag')}
          />
          <Text
            textAlign={'center'}
            color="black"
            fontSize="15"
            fontWeight="normal"
          >
            Bag
          </Text>
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
          <IconButton
            icon={solidProfileIcon}
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
            Profile
          </Text>
        </Pressable>
      </HStack>
    </>
  );
}
