import React from 'react';
import { Pressable, Text } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';
import { Colors } from '../../general/colors/localprice.colors';

export default function FilterButton({
  value,
  toggle,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Pressable
        onPress={
          onPressHandler
            ? onPressHandler
            : () => console.log('Filter Button Pressed')
        }
        w="20"
        h={5}
        bg={toggle ? Colors.DarkViolet : Colors.LightViolet}
        rounded="full"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={'10'} color={toggle ? Colors.White : Colors.Black}>
          {value}
        </Text>
      </Pressable>
    </>
  );
}
