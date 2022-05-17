import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../types/buttonProps.type';

export default function SolidButton({
  value,
  color,
  fontWeight,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'solid'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('Button Pressed')
        }
        _text={{
          fontSize: '15',
          fontWeight: fontWeight ? fontWeight : 'medium'
        }}
        borderRadius={'50'}
        backgroundColor={color ? color : '#9E6DDE'}
      >
        {value}
      </Button>
    </>
  );
}
