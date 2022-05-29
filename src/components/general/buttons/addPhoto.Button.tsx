import React from 'react';
import { addIcon } from '../icons/localprice.icons';
import { Center, IconButton, Text } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';

export default function AddPhotoButton({ onPressHandler }: ButtonProps) {
  return (
    <>
      <Center width={'80px'} height={'80px'}>
        <IconButton
          icon={addIcon}
          onPress={
            onPressHandler
              ? onPressHandler
              : () => console.log('Add photo pressed')
          }
          size={'35px'}
          backgroundColor={'#D5C1F1'}
          borderRadius={'10'}
        />
        <Text fontSize={'10'}>Add Photo</Text>
      </Center>
    </>
  );
}
