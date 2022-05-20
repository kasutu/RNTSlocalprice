import { Box, Center, NativeBaseProvider, Text, VStack } from 'native-base';
import React from 'react';
import SolidButton from '../../components/buttons/solid.button';
import { TitleHeader } from '../../components/header/titleAndBackButton.header';

export default function ProfileView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <VStack space={2} width={'full'} height={'full'}>
          <TitleHeader title="Profile" />
          <Center
            marginY={'3'}
            bottom={'20'}
            position={'absolute'}
            width={'full'}
            maxWidth={'full'}
          >
            <SolidButton value="Log In or Register" />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
