import { Box, Input } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { HeaderProps } from '../../../types/headerProps.type';
import { Colors } from '../../general/colors/localprice.colors';

export function HomeSearch({ onPressHandler }: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeArea>
        {/* search input */}
        <Input
          variant="filled"
          placeholder={'Search'}
          placeholderTextColor={'black'}
          alignSelf={'center'}
          width={'full'}
          maxWidth={360}
          height={'10'}
          bgColor={Colors.LightViolet}
          borderColor={Colors.LightViolet}
          borderRadius={'full'}
        />
      </Box>
    </>
  );
}
