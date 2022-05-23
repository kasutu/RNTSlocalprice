import {
  Box,
  Center,
  Icon,
  NativeBaseProvider,
  VStack,
  HStack
} from 'native-base';
import React from 'react';
import SolidButton from '../../components/buttons/solid.button';
import { TitleHeader } from '../../components/header/titleAndBackButton.header';
import {
  hollowBagIcon,
  hollowChatIcon,
  hollowHomeIcon,
  hollowNotifIcon,
  profileIcon
} from '../../icons/localprice.icons';

export default function ProfileView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <VStack width={'full'} height={'full'}>
          <TitleHeader title="Profile" />
          <Center
            alignContent={'center'}
            textAlign={'center'}
            marginY={'3'}
            width={'full'}
            height={'30px'}
          >
            {<Icon size={'45px'} as={profileIcon} />}
          </Center>
          <Center width={'full'}>
            <Center
              _text={{ textAlign: 'center' }}
              alignContent={'center'}
              textAlign={'center'}
              width={'190px'}
              backgroundColor={'#D5C1F1'}
              borderRadius={'10'}
            >
              Anonymous
            </Center>
          </Center>
          <Center
            marginY={'3'}
            bottom={'3'}
            position={'absolute'}
            width={'full'}
            maxWidth={'full'}
          >
            <SolidButton value="Log In or Register" />{' '}
            <HStack space={7} justifyContent={'center'} width={'full'}>
              <Icon size={'35px'} as={hollowHomeIcon} />
              <Icon size={'35px'} as={hollowChatIcon} />
              <Icon size={'35px'} as={hollowBagIcon} />
              <Icon size={'35px'} as={hollowNotifIcon} />
              <Icon size={'35px'} as={profileIcon} />
            </HStack>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
