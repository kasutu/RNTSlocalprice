import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../types/buttonProps.type';

export default function ViewLocationButton({
  value,
  borderColor,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Button
        width={'100px'}
        height={'10'}
        variant={'outline'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('View location pressed')
        }
        _text={{ fontSize: '12', fontWeight: 'light' }}
        borderRadius={'xxl'}
        borderColor={borderColor}
      >
        {value}
      </Button>
    </>
  );
}
