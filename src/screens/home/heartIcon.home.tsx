import React from 'react';
import { Box, HStack, IconButton, StatusBar, Text } from 'native-base';
import { HeaderProps } from '../../types/headerProps.type';
import { heartIcon } from '../../icons/localprice.icons';
import { HeartColor } from '../../colors/localprice.colors';

export default function HeartIcon({ onPressHandler }: HeaderProps) {
  return (
    <>
      <Box safeAreaTop />
      <HStack alignItems="center">
        <IconButton
          icon={heartIcon}
          alignItems={'end'}
          onPress={
            onPressHandler
              ? onPressHandler
              : () => console.log('Heart button pressed ')
          }
        />
      </HStack>
    </>
  );
}
