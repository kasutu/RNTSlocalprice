import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../types/buttonProps.type';

export default function FilterButton({
    value,
    color,
    fontWeight,
    onPressHandler,
  }: ButtonProps) {
    return (
      <>
        <Button
          width={'87'}
          height={'9'}
          variant={'solid'}
          opacity={60}
          onPress={
            onPressHandler ? onPressHandler : () => console.log('Filter Button Pressed')
          }
          _text={{
            color: 'black',
            fontSize: '14',
            fontWeight: fontWeight ? fontWeight : 'normal'

          }}
          borderRadius={'50'}
          backgroundColor={color ? color : '#9E6DDE'}
        >
          {value}
        </Button>
      </>
    );
};