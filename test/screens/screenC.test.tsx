import React from 'react';
import { Box, Heading, VStack } from 'native-base';
import { CentralObjectsObserver } from './factory.test';

// dummy text
// dont use 'useState()' when rendering multiple components
// const stringsArr: string[] = ['text 1', 'text 2', 'text 3', 'text 4'];

export default function ScreenC() {
  return (
    <>
      <Box flex={1} w={'full'} h={'full'} safeArea bg={'blueGray.300'}>
        <Heading padding={5}>{'ScreenC.tsx'}</Heading>
        <VStack space={1}>
          {/* observer is then used here */}
          <CentralObjectsObserver />
        </VStack>
      </Box>
    </>
  );
}
