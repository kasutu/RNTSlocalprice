import React from 'react';
import {
  Box,
  Center,
  Heading,
  HStack,
  IconButton,
  Input,
  StatusBar,
  Text
} from 'native-base';
import { HeaderProps } from '../../../types/headerProps.type';
import { arrowBack } from '../icons/localprice.icons';
import { InputColor } from '../colors/localprice.colors';

export function TitleAndBackButtonHeader({
  title,
  onPressHandler
}: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop>
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
            <Heading color="black">{title}</Heading>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

export function TitleHeader({ title }: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeAreaTop>
        <HStack alignItems="center">
          <Center marginLeft={'4'} marginTop={'3'}>
            <Heading color="black">{title}</Heading>
          </Center>
        </HStack>
      </Box>
    </>
  );
}

export function SearchHeader({ onPressHandler }: HeaderProps) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Box safeArea>
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

            {/* search input */}
            <Input
              variant="filled"
              placeholder={'Search'}
              placeholderTextColor={'black'}
              width={'full'}
              maxWidth={'300'}
              height={'8'}
              bgColor={InputColor}
              borderColor={InputColor}
              borderRadius={'full'}
              onChangeText={text => console.log(text)}
            />

            {/* heart pressable icon soon */}
          </HStack>
        </HStack>
      </Box>
    </>
  );
}
