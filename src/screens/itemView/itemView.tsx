import {
    Box,
    Center,
    HStack,
    NativeBaseProvider,
    ScrollView,
    Stack,
    Text,
    VStack
  } from 'native-base';
  import React from 'react';
  import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
  import PhotoHolderButton from '../home/photoHolder.home';
  import SearchInput from '../home/searchButton';
  import ItemViewPhotoHolder from './photoHolder.itemview';
import ViewLocationButton from './viewLocation.itemView';
  
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

            <VStack backgroundColor={'white'} space={5} marginY={7}>
              <Box safeArea>
                <Center >
                  <SearchInput placeholder="Search" />
                </Center>
              </Box>
              <VStack />
  
              <ScrollView>
                <Center>
                    {/* main item */}
                  <VStack>
                    <ItemViewPhotoHolder value="item viewed" />
                    <HStack>
                        <Text fontWeight={'bold'} fontSize={'lg'}>Description</Text>
                        <Text fontWeight={'bold'} fontSize={'lg'} color={'#8244d5'}>Price</Text> 
                        <ViewLocationButton value={'View Location'}/>
                    </HStack>
                  </VStack>
                  <VStack space={'3'}>
                      <Text fontWeight={'bold'} fontSize={'lg'}> Details</Text>
                      <Text>
                        About the product
                      </Text>
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
        </Box>
      </NativeBaseProvider>
    );
  }
  