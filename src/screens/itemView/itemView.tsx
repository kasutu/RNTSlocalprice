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
  import PhotoHolderButton from '../home/photoHolder.home';
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
                  <SearchInput placeholder="Search" />
                  <TitleAndBackButtonHeader
                    title=" "
                    onPressHandler={() => console.log('Item view back btn')}
                  />
                </HStack>
              </Box>
              <VStack />
  
              <ScrollView>
                <Center>
                    {/* main item */}
                  <VStack space={'3'}>
                    <ItemViewPhotoHolder value="item viewed" />
                    <Text alignSelf={'normal'}>Description</Text>
                  </VStack>
                  <VStack space={'3'}>
                      <Text alignSelf={'normal'} fontWeight={'bold'} fontSize={'md'}> Details</Text>
                  </VStack>
  
                  {/* related/suggestion items */}
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
  