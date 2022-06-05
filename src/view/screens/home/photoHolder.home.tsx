import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';


export default function PhotoHolderButton({
    value,
    color,
    fontWeight,
    onPressHandler,
  }: ButtonProps) {
    return (
      <>
        <Button
          width={'190'}
          height={'190'}
          variant={'solid'}
          onPress={
            onPressHandler ? onPressHandler : () => console.log('Item Pressed')
          }
          _text={{
            fontSize: '14',
            fontWeight: fontWeight ? fontWeight : 'normal'

          }}
          borderRadius={'10'}
          backgroundColor={color ? color : '#9E6DDE'}
        >
          {value}
        </Button>
      </>
    );
};