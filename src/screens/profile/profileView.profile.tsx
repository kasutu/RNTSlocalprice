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
import IconButtonsFooter from '../../components/footer/iconButtons.footer';
import { TitleHeader } from '../../components/header/headers';
import { solidProfileIcon } from '../../icons/localprice.icons';

export default function ProfileView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack width={'full'} height={'full'}>
          <TitleHeader title="Profile" />
          <Center
            alignContent={'center'}
            textAlign={'center'}
            marginY={'3'}
            width={'full'}
            height={'30px'}
          >
            {<Icon size={'45px'} as={solidProfileIcon} />}
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
            <SolidButton value="Log In or Register" />
            <IconButtonsFooter />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
