import ButtonBar from '../../components/buttonBar.component';
import HeaderBar from '../../components/headerBar.components';
import React from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';

export default function AddLocationMap() {
  return (
    <NativeBaseProvider>
      <VStack space={3} height={'full'}>
        {/* status bar */}
        <HeaderBar />

        {/* map placeholder */}
        <Center
          backgroundColor={'indigo.500'}
          height={'80%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text color="black" fontSize="20" fontWeight="bold">
            MAP
          </Text>
        </Center>

        {/* cancel and save btn */}
        <Box
          safeAreaBottom
          flex={1}
          marginY={'5'}
          position={'absolute'}
          bottom={'0'}
          flexDirection={'row'}
          justifyContent={'center'}
          width={'100%'}
        >
          <ButtonBar />
        </Box>
      </VStack>
    </NativeBaseProvider>
  );
}
