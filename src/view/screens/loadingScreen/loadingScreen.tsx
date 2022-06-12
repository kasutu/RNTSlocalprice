import {
  Box,
  Center,
  Heading,
  HStack,
  NativeBaseProvider,
  Spinner
} from 'native-base';
import React from 'react';
import { Colors } from '../../general/colors/localprice.colors';

export function LoadingScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <Center flex={1}>
          <HStack space={2} justifyContent="center">
            <Spinner
              color={Colors.TrademarkViolet}
              accessibilityLabel="Loading"
            />
            <Heading color={Colors.TrademarkViolet} fontSize="md">
              Loading stuff
            </Heading>
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
