import OutlineButton from './buttons/outline.button';
import React from 'react';
import SolidButton from './buttons/solid.button';
import { Center, HStack } from 'native-base';

export default function CancelAndSave() {
  return (
    <>
      <HStack alignItems="center" maxH={'100%'}>
        <Center mx={'2.5'}>
          <OutlineButton value="Cancel" />
        </Center>
        <Center mx={'2.5'}>
          <SolidButton value="Save" />
        </Center>
      </HStack>
    </>
  );
}
