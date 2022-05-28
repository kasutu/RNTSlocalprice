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
import { SearchHeader } from '../../components/header/headers';
import FilterButton from './filterButton';
import PhotoHolderButton from './photoHolder.home';

export default function MainHome() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <SearchHeader />
        <Center>
          <VStack backgroundColor={'white'} space={5} marginY={7}>
            <HStack space={3}>
              <FilterButton value="All" />
              <FilterButton value="My posts" />
              <FilterButton value="Near you" />
              <FilterButton value="Filter" />
            </HStack>
            <VStack />

            <ScrollView>
              <Center>
                <HStack space={3}>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                </HStack>
                <HStack space={3}>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                </HStack>
                <HStack space={3}>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                </HStack>
                <HStack space={3}>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                  <VStack>
                    <PhotoHolderButton value="Item" />
                    <Text alignSelf={'center'}>Description</Text>
                  </VStack>
                </HStack>
              </Center>
            </ScrollView>
          </VStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
