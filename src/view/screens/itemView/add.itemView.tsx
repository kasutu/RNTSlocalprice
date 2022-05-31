import React from 'react';
import { Center, HStack } from 'native-base';
import OutlineButton from '../../general/buttons/outline.button';
import { HollowAndSolidButtonProps } from '../../../types/buttonProps.type';
import SolidButton from '../../general/buttons/solid.button';

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
            value={hollowButtonValue ? hollowButtonValue : 'Add to Cart'}
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
