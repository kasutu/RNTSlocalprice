import OutlineButton from './buttons/outline.button';
import React from 'react';
import SolidButton from './buttons/solid.button';
import { Center, HStack } from 'native-base';

export default function ButtonBar() {
  return (
    <>
      <HStack alignItems="center" maxH={'100%'}>
        <Center mx={'2.5'}>
          <OutlineButton />
        </Center>
        <Center mx={'2.5'}>
          <SolidButton />
        </Center>
      </HStack>
    </>
  );
}
