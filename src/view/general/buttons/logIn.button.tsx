import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';

export default function LogInButton({
  color,
  fontWeight,
  ...props
}: ButtonProps) {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'solid'}
        _text={{
          fontSize: '15',
          fontWeight: fontWeight ? fontWeight : 'medium'
        }}
        borderRadius={'50'}
        backgroundColor={color ? color : '#9E6DDE'}
        {...props}
      >
        Log In
      </Button>
    </>
  );
}
