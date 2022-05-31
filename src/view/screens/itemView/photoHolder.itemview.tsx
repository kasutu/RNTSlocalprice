import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';


export default function ItemViewPhotoHolder({
    value,
    color,
    fontWeight,
    onPressHandler,
  }: ButtonProps) {
    return (
      <>
        <Button
          width={'410'}
          height={'410'}
          variant={'solid'}
          onPress={
            onPressHandler ? onPressHandler : () => console.log('Item viewed')
          }
          _text={{
            fontSize: '20',
            fontWeight: fontWeight ? fontWeight : 'medium'

          }}
          borderRadius={'0'}
          backgroundColor={color ? color : '#9E6DDE'}
        >
          {value}
        </Button>
      </>
    );
};