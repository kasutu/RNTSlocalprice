import {
  Box,
  Button,
  Center,
  Container,
  Fab,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Text,
  VStack,
  ZStack
} from 'native-base';
import React from 'react';
import { SearchHeader } from '../../components/header/headers';
import HollowAndSolidButton from '../../components/hollowAndSolidButton.component';

const description: string = 'Apple Macbook pro 16gb ram';
const itemDetails: string = 'More details about the product.';
const price: string = 'P100,000';
const ratings: string = '5.0';
const location: string = 'Iloilo';

export default function ItemView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* search header component */}
        <SearchHeader />

        <VStack space={5} flex={1}>
          <VStack />

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* main item */}
            <VStack h={'full'}>
              <Box h={'350'}>
                {/* image placeholder */}
                <Pressable
                  flex={1}
                  bg={'muted.500'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Text color={'white'}>Image placeholder</Text>
                </Pressable>
              </Box>

              <Box padding={'2'}>
                <Container maxH={'50'}>
                  {/* description */}
                  <Text fontWeight={'medium'} fontSize={'lg'}>
                    {description}
                  </Text>
                </Container>
                <HStack>
                  <Box flex={1}>
                    <VStack>
                      <Container>
                        {/* price */}
                        <Box>
                          <Text
                            fontWeight={'medium'}
                            fontSize={'xl'}
                            color={'#8244d5'}
                          >
                            {price}
                          </Text>
                        </Box>
                      </Container>
                      <Box>
                        {/* ratings and location */}
                        <Text>{ratings}</Text>
                        <Text color={'gray.500'}>{location}</Text>
                      </Box>
                    </VStack>
                  </Box>
                  <Box
                    flex={1}
                    justifyContent={'center'}
                    alignItems={'flex-end'}
                  >
                    {/* buttons */}

                    <Pressable
                      width={'100'}
                      height={'6'}
                      onPress={() => console.log('item location pressed')}
                      borderRadius={'50'}
                      borderWidth={'1'}
                      borderColor={'#8244d5'}
                      justifyContent={'center'}
                      alignItems={'center'}
                    >
                      <Text color={'#8244d5'} fontSize={'10'}>
                        Show Location
                      </Text>
                    </Pressable>
                  </Box>
                </HStack>
              </Box>

              <Box padding={'2'}>
                {/* details */}

                <Text fontWeight={'medium'} fontSize={'lg'}>
                  Details
                </Text>
                <Text fontWeight={'normal'} fontSize={'sm'}>
                  {itemDetails}
                </Text>
              </Box>
            </VStack>
          </ScrollView>
        </VStack>

        {/* buttons */}
        <Center paddingY={'3'} backgroundColor={'white'}>
          <HollowAndSolidButton
            hollowButtonValue="Buy Now"
            solidButtonValue="Add to Cart"
          />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
