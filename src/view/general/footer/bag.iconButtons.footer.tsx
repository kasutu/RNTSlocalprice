import React from 'react';
import { Box, HStack, IconButton, Pressable, Text, Center } from 'native-base';
import { FooterProps } from '../../../types/footerProps.type';
import {
  hollowHomeIcon,
  hollowNotifIcon,
  hollowChatIcon,
  hollowProfileIcon,
  solidBagIcon
} from '../icons/localprice.icons';

export default function BagIconButtonsFooter({
  navigation,
}: FooterProps) {
  return (
    <>
      <Box safeAreaBottom />
      <Center>
        <HStack alignItems="center" space={4}>
          <Pressable>
            <IconButton icon={hollowHomeIcon} />
            <Text
              textAlign={'center'}
              color="black"
              fontSize="15"
              fontWeight="normal"
              onPress={() => navigation.navigate('Home')}
            >
              Home
            </Text>
          </Pressable>
          <Pressable>
            <IconButton
              icon={hollowChatIcon}
              onPress={() => navigation.navigate('LogInScreen', { destination: 'AllChatScreen' })}
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
              onPress={() => console.log('already in bag')}
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
              onPress={() => navigation.navigate('LogInScreen', { destination: 'NotificationView' })}
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
              onPress={() => navigation.navigate('LogInScreen', { destination: 'ProfileScreen' })}
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
