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
import FilterButton from './filterButton';
import PhotoHolderButton from './photoHolder.home';
import SearchInput from './searchButton';

export default function MainHome() {
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
              <SearchInput placeholder="Search" />
            </Box>

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
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
              </HStack>
              <HStack space={3}>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
              </HStack>
              <HStack space={3}>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
              </HStack>
              <HStack space={3}>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
                </VStack>
                <VStack>
                  <PhotoHolderButton value="Item" />
                  <Text alignSelf={'center'}>
                    Description
                  </Text>
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
