import React from 'react';
import { Box, Heading, VStack } from 'native-base';
import { CentralObjectsObserver } from './factory.test';

// dummy text
// dont use 'useState()' when rendering multiple components
// const stringsArr: string[] = ['text 1', 'text 2', 'text 3', 'text 4'];

export default function ScreenB() {
  return (
    <>
      <Box flex={1} w={'full'} h={'full'} safeArea bg={'coolGray.200'}>
        <Heading padding={5}>{'ScreenB.tsx'}</Heading>
        <VStack space={1}>
          {/* observer is then used here */}
          <CentralObjectsObserver />
        </VStack>
      </Box>
    </>
  );
}
