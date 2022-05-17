import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { Box, HStack, IconButton, StatusBar, Text } from 'native-base';
import { HeaderProps } from '../../types/headerProps.type';

const arrowBack = <Icon name="arrow-back" size={30} color="black" />;

export default function titleAndBackButtonHeader({ title }: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop />
      <HStack alignItems="center">
        <HStack alignItems="center" space={2}>
          <IconButton
            icon={arrowBack}
            onPress={() => console.log('BACK pressed ')}
          />
          <Text color="black" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}