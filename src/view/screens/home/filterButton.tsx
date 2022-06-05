import React from 'react';
import { Pressable, Text } from 'native-base';
import { ButtonProps } from '../../../types/buttonProps.type';

export default function FilterButton({
  value,
  color,
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
        h="8"
        bg={color ? color : 'violet.300'}
        rounded="full"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Text fontSize={'13'}>{value}</Text>
      </Pressable>
    </>
  );
}
