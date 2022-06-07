import React from 'react';
import { Box, HStack, IconButton, Pressable, Text, Center } from 'native-base';
import { FooterProps } from '../../../types/footerProps.type';
import {
  hollowNotifIcon,
  hollowBagIcon,
  hollowChatIcon,
  hollowProfileIcon,
  solidHomeIcon
} from '../icons/localprice.icons';

export default function HomeIconButtonsFooter({ navigation }: FooterProps) {
  return (
    <>
      <Box safeAreaBottom />
      <Center>
        <HStack alignItems="center" space={4}>
          <Pressable>
            <IconButton icon={solidHomeIcon} />
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
              onPress={() =>
                navigation.navigate('LogInScreen', {
                  destination: 'AllChatsScreen'
                })
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
              onPress={() =>
                navigation.navigate('LogInScreen', {
                  destination: 'ShoppingBagScreen'
                })
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
              onPress={() =>
                navigation.navigate('LogInScreen', {
                  destination: 'NotificationScreen'
                })
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
              onPress={() =>
                navigation.navigate('LogInScreen', {
                  destination: 'ProfileScreen'
                })
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
