import React from 'react';
import { Center, HStack } from 'native-base';
import OutlineButton from '../../components/buttons/outline.button';
import { HollowAndSolidButtonProps } from '../../types/buttonProps.type';
import SolidButton from '../../components/buttons/solid.button';

export default function CheckOutAddBUtton({
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
            value={hollowButtonValue ? hollowButtonValue : 'Add'}
            onPressHandler={onPressCancelHandler}
          />
        </Center>
        <Center mx={'2.5'}>
          <SolidButton
            value={solidButtonValue ? solidButtonValue : 'Check Out'}
            onPressHandler={onPressSaveHandler}
          />
        </Center>
      </HStack>
    </>
  );
}
