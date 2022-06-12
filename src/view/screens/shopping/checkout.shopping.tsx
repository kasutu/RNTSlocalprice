import React, { useCallback } from 'react';
import {
  Box,
  Center,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import {
  FullName,
  PhoneNumber,
  Email,
  Address
} from '../../../model/store/user/metadata.user';
import { LocationIcon } from '../../general/icons/localprice.icons';
import SolidButton from '../../general/buttons/solid.button';
import temptransactionstore from '../../../model/transactionStore/tempTransactio';

export function CheckoutScreen() {
  return (
    <>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader title="Checkout" />

        {/* USER DELIVERY DETAILS */}
        <VStack space={'1'}>
          <Center>
            <Text fontSize={'18px'} fontWeight={'bold'}>
              {FullName}
            </Text>
          </Center>

          {/* USER ADDRESS */}
          <HStack space={2}>
            <Center
              justifyContent={'center'}
              alignContent={'center'}
              marginLeft={10}
            >
              {/* ADDRESS ICON */}
              {<Icon color={'black'} size={'30px'} as={LocationIcon} />}
            </Center>
            <VStack
              paddingLeft={'2'}
              flex={1}
              justifyContent={'center'}
              alignContent={'center'}
            >
              {/* ADDRESS DETAILS */}
              <Center>
                <Text fontSize={'12'}>{PhoneNumber}</Text>
              </Center>
              <Center>
                <Text fontSize={'12'}>{Email}</Text>
              </Center>
              <Center>
                <Text fontSize={'12'}>{Address}</Text>
              </Center>
            </VStack>
            <Box
              marginRight={10}
              justifyContent={'center'}
              alignContent={'center'}
            >
              {/* EDIT ADDRESS */}
              <Pressable onPress={() => console.log(`Edit btn click`)}>
                <Text
                  alignSelf={'center'}
                  color={'blue.400'}
                  fontSize={'15'}
                  fontWeight={'medium'}
                >
                  Edit
                </Text>
              </Pressable>
            </Box>
          </HStack>
        </VStack>

        {/* PARCEL DETAILS */}
        <VStack flex={1} paddingX={2} space={1}>
          {/* ITEM LIST */}
          <VStack flex={1}>
            <VStack flex={1}>
              <Box>
                <Text fontWeight={'bold'} fontSize={'16px'}>
                  Items
                </Text>
              </Box>
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

            {/* ORDER DETAILS */}
            <VStack paddingX={2} space={1}>
              <VStack space={2} paddingY={'2'}>
                {/* PAYMENT OPTION */}
                <Box>
                  <Text fontWeight={'bold'} fontSize={'12px'}>
                    Payment Option
                  </Text>
                </Box>

                <HStack space={2}>
                  <Center>
                    <Text fontSize={10}>{'button'}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={10}>Cash On Delivery</Text>
                  </Center>
                </HStack>
                <HStack space={2}>
                  <Center>
                    <Text fontSize={10}>{'button'}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={10}>Pickup and Pay</Text>
                  </Center>
                </HStack>
              </VStack>

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
                  <Text fontSize={10} color={'#9E6DDE'} fontWeight={'medium'}>
                    {'P100,000'}
                  </Text>
                </Center>
              </HStack>
              <HStack justifyContent={'space-between'}>
                <Center>
                  <Text fontSize={10}>Shipping Fee</Text>
                </Center>
                <Center>
                  <Text fontSize={10} color={'#9E6DDE'} fontWeight={'medium'}>
                    {'P00.00'}
                  </Text>
                </Center>
              </HStack>

              {/* FOOTER */}
              <Box>
                <Text fontWeight={'bold'} fontSize={'12px'}>
                  Total
                </Text>
              </Box>
              <HStack justifyContent={'space-around'} paddingBottom={2}>
                <Center>
                  <Text color={'#9E6DDE'} fontWeight={'bold'} fontSize={'30px'}>
                    {'P100,000'}
                  </Text>
                </Center>
                <Center>
                  <SolidButton
                    value="Place Order"
                    onPressHandler={() => temptransactionstore.addToDatabase()}
                  />
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </>
  );
}
