import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';

export default function OutlineButton({
  value,
  borderColor,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'outline'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('CANCEL pressed')
        }
        _text={{ fontSize: '15', fontWeight: 'medium' }}
        borderRadius={'50'}
        borderColor={borderColor}
      >
        {value}
      </Button>
    </>
  );
}
