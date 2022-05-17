import OutlineButton from './buttons/outline.button';
import React from 'react';
import SolidButton from './buttons/solid.button';
import { Center, HStack } from 'native-base';
import { CancelAndSave } from '../types/buttonProps.type';

export default function CancelAndSave({
  onPressCancelHandler,
  onPressSaveHandler
}: CancelAndSave) {
  return (
    <>
      <HStack alignItems="center" maxH={'100%'}>
        <Center mx={'2.5'}>
          <OutlineButton value="Cancel" onPressHandler={onPressCancelHandler} />
        </Center>
        <Center mx={'2.5'}>
          <SolidButton value="Save" onPressHandler={onPressSaveHandler} />
        </Center>
      </HStack>
    </>
  );
}
