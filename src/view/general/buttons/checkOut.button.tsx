import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';

export default function CheckOutButton({
  color,
  fontWeight,
  navigation,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'solid'}
        /* onPress={() => navigation.navigate('CheckoutScreen')} */
        onPress={
            onPressHandler ? onPressHandler : () => console.log('Will Proceed to CheckoutScreen')
          }
        _text={{
          fontSize: '13',
          fontWeight: fontWeight ? fontWeight : 'medium'
        }}
        borderRadius={'50'}
        backgroundColor={color ? color : '#9E6DDE'}
      >
        Proceed to Checkout
      </Button>
    </>
  );
}
