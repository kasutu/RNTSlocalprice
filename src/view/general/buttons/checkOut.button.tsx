import React from 'react';
import { Pressable, Text } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';
import { Colors } from '../colors/localprice.colors';

export default function CheckOutButton({ onPressHandler }: ButtonProps) {
  return (
    <>
      <Pressable
        width={'300'}
        height={'35'}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={
          onPressHandler
            ? onPressHandler
            : () => console.log('Will Proceed to CheckoutScreen')
        }
        borderRadius={'50'}
        bg={Colors.TrademarkViolet}
      >
        <Text color={Colors.White} fontSize={'15'} fontWeight={'medium'}>
          {'Proceed to Checkout'}
        </Text>
      </Pressable>
    </>
  );
}

export function GoToCartButton({ onPressHandler }: ButtonProps) {
  return (
    <>
      <Pressable
        width={'300'}
        height={'35'}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('goto cart')
        }
        borderRadius={'50'}
        bg={Colors.TrademarkViolet}
      >
        <Text color={Colors.White} fontSize={'15'} fontWeight={'medium'}>
          {'Goto my Bag'}
        </Text>
      </Pressable>
    </>
  );
}
