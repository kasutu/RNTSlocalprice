import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../types/buttonProps.type';

export default function SolidButton({ value }: ButtonProps) {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'solid'}
        onPress={() => console.log('SAVE pressed')}
        _text={{ fontSize: '15', fontWeight: 'medium' }}
        borderRadius={'50'}
      >
        {value}
      </Button>
    </>
  );
}
