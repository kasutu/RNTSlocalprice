import React from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  VStack,
  Checkbox,
  HStack,
  Pressable,
  Text,
  Container,
  Button
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import CheckOutButton from '../../general/buttons/checkOut.button';

const description: string = 'Apple Macbook pro 16gb ram';
const itemDetails: string = 'More details about the product.';
const price: string = 'P100,000';
const ratings: string = '5.0';
const location: string = 'Iloilo';

export function ShoppingBagScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader title="Shopping bag" />

        <HStack space={'3'} paddingX={5} mb={3}>
          {/* SELECT AND DELETE ALL BUTTON */}
          <Box>
            {/* // alternative: pressing the text will also trigger onChange */}
            <Checkbox
              color={'#9B69DD'}
              borderRadius={'full'}
              borderColor={'#9B69DD'}
              style={{
                width: 15,
                height: 15
              }}
              _text={{ fontSize: '12' }}
              value={''}
            >
              Select All
            </Checkbox>
          </Box>

          <Box flex={1} alignItems={'flex-end'}>
            {/* DELETE BUTTON */}
            <Pressable onPress={() => console.log('deleted')}>
              <Text fontSize={'12'}>Delete</Text>
            </Pressable>
          </Box>
        </HStack>

        {/* LIST SECTION */}
        <VStack width={'full'} paddingX={'5'} space={3}>
          {/* the shop name */}
          <HStack space={2}>
            <Center>
              <Checkbox
                accessibilityLabel="all"
                color={'#9B69DD'}
                borderRadius={'full'}
                borderColor={'#9B69DD'}
                style={{
                  width: 15,
                  height: 15
                }}
                value={''}
              />
            </Center>
            <Center>
              <Text fontWeight={'bold'}>Gadget Headz</Text>
            </Center>
          </HStack>

          <VStack space={5}>
            <HStack space={2}>
              {/* items that one shop owns  */}
              <Center>
                <Checkbox
                  accessibilityLabel="all"
                  color={'#9B69DD'}
                  borderRadius={'full'}
                  borderColor={'#9B69DD'}
                  style={{
                    width: 15,
                    height: 15
                  }}
                  value={''}
                />
              </Center>

              <Center
                width={'20'}
                height={'20'}
                backgroundColor={'muted.500'}
                borderRadius={10}
              >
                <Text fontSize={'10'}>Placeholder</Text>
              </Center>
              <Box flex={1}>
                {/* CARD DETAILS AND DESCRIPTION */}
                <Box maxH={'20'}>
                  {/* description */}
                  <Text fontWeight={'medium'} fontSize={15}>
                    {description}
                  </Text>
                </Box>
                <HStack>
                  <Box flex={1}>
                    <VStack>
                      <Container>
                        {/* price */}
                        <Box>
                          <Text
                            fontWeight={'normal'}
                            fontSize={15}
                            color={'#8244d5'}
                          >
                            {price}
                          </Text>
                        </Box>
                      </Container>
                      <Box>
                        {/* ratings and location */}
                        <Text fontSize={12}>{ratings}</Text>
                        <Text fontSize={12} color={'gray.500'}>
                          {location}
                        </Text>
                      </Box>
                    </VStack>
                  </Box>
                  <Box
                    flex={1}
                    justifyContent={'flex-end'}
                    alignItems={'flex-end'}
                  >
                    {/* buttons */}
                    <HStack
                      borderColor={'#BA97E7'}
                      borderWidth={'2px'}
                      borderRadius={'full'}
                      space={2}
                      padding={'2px'}
                    >
                      <Box
                        borderRadius={'full'}
                        width={'20px'}
                        height={'20px'}
                        bg={'blue.500'}
                      ></Box>
                      <Box
                        borderRadius={'full'}
                        width={'20px'}
                        height={'20px'}
                        bg={'black'}
                      ></Box>
                      <Box
                        borderRadius={'full'}
                        width={'20px'}
                        height={'20px'}
                        bg={'blue.500'}
                      ></Box>
                    </HStack>
                  </Box>
                </HStack>
              </Box>
            </HStack>
          </VStack>
        </VStack>

        <Center
          backgroundColor={'white'}
          bottom={'0'}
          position={'absolute'}
          width={'full'}
          paddingY={5}
        >
          {/* order summary */}
          <HStack padding={5}>
            <VStack flex={1} space={2}>
              <Text fontWeight={'bold'}>Gadget Headz</Text>
              <Text fontWeight={'normal'} fontSize={12}>
                Subtotal
              </Text>
              <Text fontWeight={'normal'} fontSize={12}>
                Shipping Fee
              </Text>
              <Text fontWeight={'normal'} fontSize={12}>
                Subtotal
              </Text>
            </VStack>
            <VStack flex={1} alignItems={'flex-end'} space={2}>
              <Text fontWeight={'bold'} color={'#9E6DDE'}>
                3 Items
              </Text>
              <Text fontWeight={'normal'} fontSize={12} color={'#9E6DDE'}>
                P89,000
              </Text>
              <Text fontWeight={'normal'} fontSize={12} color={'#9E6DDE'}>
                P0
              </Text>
              <Text fontWeight={'normal'} fontSize={12} color={'#9E6DDE'}>
                P89,000
              </Text>
            </VStack>
          </HStack>
          <CheckOutButton navigation={navigation} />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
