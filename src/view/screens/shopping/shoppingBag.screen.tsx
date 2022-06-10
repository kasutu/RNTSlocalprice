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
  Image,
  ScrollView,
  Icon
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import CheckOutButton from '../../general/buttons/checkOut.button';
import { uuid } from '../../../api/uuid/index.uuid';
import { Colors } from '../../general/colors/localprice.colors';
import { PlusIcon, MinusIcon } from '../../general/icons/localprice.icons';
import { ShoppingBagItems } from '../../render/ShoppingBagCards';

export function ShoppingBagScreen() {
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack width={'full'} paddingX={'5'} space={3}>
            {/* the shop name */}
            {/* <HStack space={2}>
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
              />
            </Center>
            <Center>
              <Text fontWeight={'bold'}>Gadget Headz</Text>
            </Center>
          </HStack> */}

            {/* ITEMS HERE */}
            <ShoppingBagItems />
          </VStack>
        </ScrollView>

        <Center
          backgroundColor={Colors.White}
          bottom={'0'}
          position={'absolute'}
          width={'full'}
          paddingTop={2}
        >
          {/* order summary */}
          <HStack paddingX={5}>
            <VStack flex={1} space={2}>
              <Text fontWeight={'bold'}>Order Summary</Text>
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
              <Text fontWeight={'bold'} color={Colors.TrademarkViolet}>
                3 Items
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P89,000
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P0
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P89,000
              </Text>
            </VStack>
          </HStack>
          <Box paddingY={4}>
            <CheckOutButton />
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
