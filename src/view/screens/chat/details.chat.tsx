import React from 'react';
import {
  Avatar,
  Box,
  Center,
  HStack,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import SolidButton from '../../general/buttons/solid.button';

const role = 'Verified Seller';
const fullName = 'Silicone Valley';
const phoneNumber = '09342378497';
const email = 'SiliMansi@localprice.com';
const address = 'Sool, Buntatala LEGANES ILOILO 5003';

export function ChatDetailsScreen() {
  return (
    <>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader title="Details" />
        {/* USER DETAILS */}

        <VStack space={1}>
          <Center>
            {/* Avatar WRAPPER */}
            <Avatar
              size={'50px'}
              source={{
                uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'
              }}
            />
          </Center>

          <Center>
            {/* Role and name */}
            <Center
              height={'20px'}
              width={'100px'}
              backgroundColor={'#9E6DDE'}
              borderRadius={'full'}
            >
              <Text fontSize={'11px'}>{role}</Text>
            </Center>
          </Center>
          <Center>
            <Text fontSize={'18px'} fontWeight={'bold'}>
              {fullName}
            </Text>
          </Center>
          <Center>
            <Text fontSize={'10'}>{phoneNumber}</Text>
          </Center>
          <Center>
            <Text fontSize={'10'}>{email}</Text>
          </Center>
          <Center>
            <Text fontSize={'10'}>{address}</Text>
          </Center>
        </VStack>

        {/* items ordered list */}
        <VStack flex={1}>
          <VStack flex={1}>
            <HStack justifyContent={'space-around'} paddingY={'2'}>
              <Center>
                <Text fontSize={'md'} fontWeight={'medium'}>
                  Items Ordered
                </Text>
              </Center>
              <Center>
                {/* ORDER STATUS BADGE CONTAINER */}
                <Center w="130px" h="4" bg="#8244D5" rounded="full">
                  <Text fontSize={'10'} color={'white'}>
                    {'Order/s Confirmed'}
                  </Text>
                </Center>
              </Center>
            </HStack>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* ITEM LIST */}
              <VStack space={'2'} paddingX={2}>
                <Box bg={'blue.500'} height={'80px'}>
                  Horizontal Item Card
                </Box>
                <Box bg={'blue.500'} height={'80px'}>
                  Horizontal Item Card
                </Box>
                <Box bg={'blue.500'} height={'80px'}>
                  Horizontal Item Card
                </Box>
                <Box bg={'blue.500'} height={'80px'}>
                  Horizontal Item Card
                </Box>
                <Box bg={'blue.500'} height={'80px'}>
                  Horizontal Item Card
                </Box>
              </VStack>
            </ScrollView>
          </VStack>

          {/* PARCEL DETAILS */}
          <VStack paddingX={2} space={1}>
            {/* HEADER */}
            <Box>
              <Text fontWeight={'bold'} fontSize={'12px'}>
                Parcel Details
              </Text>
            </Box>
            <HStack justifyContent={'space-between'}>
              <Center>
                <Text fontSize={10}>Order ID</Text>
              </Center>
              <Center>
                <Text fontSize={10}>{'jhdioawh987tye87'}</Text>
              </Center>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Center>
                <Text fontSize={10}>Payment Option</Text>
              </Center>
              <Center>
                <Text fontSize={10}>{'COD'}</Text>
              </Center>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Center>
                <Text fontSize={10}>Received by</Text>
              </Center>
              <Center>
                <Text fontSize={10}>{'June 20 - 25, 2022'}</Text>
              </Center>
            </HStack>

            {/* ORDER SUMMARY HEADER */}
            <HStack justifyContent={'space-between'}>
              <Box>
                <Text fontWeight={'bold'} fontSize={'12px'}>
                  Order Summary
                </Text>
              </Box>
              <Box>
                <Text color={'#9E6DDE'} fontWeight={'bold'} fontSize={'12px'}>
                  {'3 items'}
                </Text>
              </Box>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Center>
                <Text fontSize={10}>Subtotal</Text>
              </Center>
              <Center>
                <Text fontSize={10}>{'jhdioawh987tye87'}</Text>
              </Center>
            </HStack>
            <HStack justifyContent={'space-between'}>
              <Center>
                <Text fontSize={10}>Shipping Fee</Text>
              </Center>
              <Center>
                <Text fontSize={10}>{'COD'}</Text>
              </Center>
            </HStack>

            {/* FOOTER */}
            <Box>
              <Text fontWeight={'bold'} fontSize={'12px'}>
                Prepare Total Amount
              </Text>
            </Box>
            <HStack justifyContent={'space-around'} paddingBottom={2}>
              <Center>
                <Text color={'#9E6DDE'} fontWeight={'bold'} fontSize={'30px'}>
                  {'P100,000'}
                </Text>
              </Center>
              <Center>
                <SolidButton value="Confirm" />
              </Center>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
