import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import React from 'react';
import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import SearchInput from '../home/searchButton';
import ItemViewPhotoHolder from './photoHolder.itemview';

export default function ItemView() {
  return (
    <NativeBaseProvider>
      <Box
        safeArea
        alignItems={'center'}
        backgroundColor={'white'}
        width={'full'}
        height={'full'}
      >
        <Center>
          <VStack backgroundColor={'white'} space={5} marginY={7}>
            <Box safeArea>
              <HStack>
              <TitleAndBackButtonHeader
                  title=" "
                  onPressHandler={() => console.log('Item view back btn')}
                />
                <SearchInput placeholder="Search" />
              </HStack>
            </Box>
            <VStack />

            <ScrollView>
              <Center>
                <ItemViewPhotoHolder value="item viewed" />
                <Text alignSelf={'normal'}>
                    Description
                </Text>
              </Center>
            </ScrollView>
          </VStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
