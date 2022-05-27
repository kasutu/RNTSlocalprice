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
import CheckOutAddBUtton from './add.itemView';
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
        <Center>
          <VStack backgroundColor={'white'} space={5} marginY={7}>
            <Center>
              <SearchInput placeholder="Search" />
            </Center>
            <VStack />

            <ScrollView>
              <Center>
                  {/* main item */} 
                <VStack space={'3'}>
                  <ItemViewPhotoHolder value="item viewed" />
                  <Text fontWeight={'bold'} fontSize={'lg'}>Description</Text>
                  <Text fontWeight={'bold'} fontSize={'lg'} color={'#8244d5'}>Price</Text>
                </VStack>
                
                <VStack space={'3'} marginY={'30'}>
                  <Box safeArea marginRight={'230px'}>
                    <Text fontWeight={'bold'} fontSize={'lg'}> Details</Text>
                    <Text fontWeight={'normal'} fontSize={'md'}> More details about the product. </Text>
                  </Box>
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

            <Center>
              <CheckOutAddBUtton />
            </Center>

          </VStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
