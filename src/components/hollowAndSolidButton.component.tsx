import OutlineButton from './buttons/outline.button';
import React from 'react';
import SolidButton from './buttons/solid.button';
import { Center, HStack } from 'native-base';
import { HollowAndSolidButtonProps } from '../types/buttonProps.type';

export default function HollowAndSolidButton({
  onPressCancelHandler,
  onPressSaveHandler,
  hollowButtonValue,
  solidButtonValue
}: HollowAndSolidButtonProps) {
  return (
    <>
      <HStack alignItems="center" maxH={'100%'}>
        <Center mx={'2.5'}>
          <OutlineButton
            value={hollowButtonValue ? hollowButtonValue : 'Cancel'}
            onPressHandler={onPressCancelHandler}
          />
        </Center>
        <Center mx={'2.5'}>
          <SolidButton
            value={solidButtonValue ? solidButtonValue : 'Save'}
            onPressHandler={onPressSaveHandler}
          />
        </Center>
      </HStack>
    </>
  );
}
