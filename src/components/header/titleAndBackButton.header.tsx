import React from 'react';
import { Box, Center, HStack, IconButton, StatusBar, Text } from 'native-base';
import { HeaderProps } from '../../types/headerProps.type';
import { arrowBack } from '../../icons/localprice.icons';

export default function TitleAndBackButtonHeader({
  title,
  onPressHandler
}: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop />
      <HStack alignItems="center">
        <HStack alignItems="center" space={2}>
          <IconButton
            icon={arrowBack}
            onPress={
              onPressHandler
                ? onPressHandler
                : () => console.log('BACK pressed ')
            }
          />
          <Text color="black" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export function TitleHeader({ title }: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop />
      <HStack alignItems="center">
        <Center marginLeft={'4'} marginTop={'3'}>
          <Text color="black" fontSize="20" fontWeight="bold">
            {title}
          </Text>
        </Center>
      </HStack>
    </>
  );
}
