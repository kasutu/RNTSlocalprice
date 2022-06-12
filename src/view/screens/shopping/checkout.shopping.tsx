import persistedUserData from '../../../model/UserStore/persistedUserData';
import React from 'react';
import SolidButton from '../../general/buttons/solid.button';
import temptransactionstore from '../../../model/transactionStore/tempTransaction';
import {
  Box,
  Center,
  HStack,
  Icon,
  VStack,
  Pressable,
  ScrollView,
  Text
} from 'native-base';
import { LocationIcon } from '../../general/icons/localprice.icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { PaymentOptions } from '../../../types/types';
import { RadioButton } from '../../render/ShoppingBagCards';
import { runInAction } from 'mobx';
import { StackParams } from '../../../types/navigationProps';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import { useNavigation } from '@react-navigation/native';

export function CheckoutScreenMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          title="Checkout"
          onPressHandler={() => stack.goBack()}
        />

        {/* USER DELIVERY DETAILS */}
        <VStack space={'1'}>
          <Center>
            <Text fontSize={'18px'} fontWeight={'bold'}>
              {persistedUserData.data.fullName}
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
                <Text fontSize={'12'}>
                  {persistedUserData.data.contactNumber}
                </Text>
              </Center>
              <Center>
                <Text fontSize={'12'}>{persistedUserData.data.email}</Text>
              </Center>
              <Center>
                <Text fontSize={'12'}>{persistedUserData.address}</Text>
              </Center>
            </VStack>
            <Box
              marginRight={10}
              justifyContent={'center'}
              alignContent={'center'}
            >
              {/* EDIT ADDRESS */}
              <Pressable onPress={() => stack.navigate('EditAddressScreen')}>
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
                    <RadioButton
                      on={() => setDelivery('cash on delivery')}
                      off={() => setDelivery('')}
                    />
                  </Center>
                  <Center>
                    <Text fontSize={10}>Cash On Delivery</Text>
                  </Center>
                </HStack>
                <HStack space={2}>
                  <Center>
                    <RadioButton
                      on={() => setDelivery('pickup and pay')}
                      off={() => setDelivery('')}
                    />
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

export const CheckoutScreen = observer(CheckoutScreenMain);

function setDelivery(condition: PaymentOptions) {
  runInAction(() => {
    temptransactionstore.paymentOption = condition;
  });
}
