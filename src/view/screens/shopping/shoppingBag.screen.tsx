import React, { useState } from 'react';
import {
  Box,
  Center,
  NativeBaseProvider,
  VStack,
  Checkbox,
  HStack,
  Pressable,
  Text,
  ScrollView
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import CheckOutButton from '../../general/buttons/checkOut.button';
import { Colors } from '../../general/colors/localprice.colors';
import { ShoppingBagItems } from '../../render/ShoppingBagCards';
import shoppingBagStore from '../../../model/shoppingBagStrore/shoppingBagStore';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { RemoveFromArr } from '../../../model/common/utils';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';

export function ShoppingBag() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          onPressHandler={() => stack.goBack()}
          title="Shopping bag"
        />

        <HStack space={'3'} paddingX={5} mb={3}>
          {/* SELECT AND DELETE ALL BUTTON */}
          <Box>
            <Checkbox
              onChange={() => {
                if (!selectedAll) {
                  runInAction(() => {
                    shoppingBagStore.selectedItems = [...shoppingBagStore.data];
                    shoppingBagStore.compute();
                  });
                  setSelectedAll(true);
                } else {
                  runInAction(() => {
                    shoppingBagStore.selectedItems = [];
                    shoppingBagStore.compute();
                  });
                  setSelectedAll(false);
                }
              }}
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
            <Pressable
              onPress={() => {
                shoppingBagStore.selectedItems.forEach((item) =>
                  runInAction(() => {
                    RemoveFromArr(shoppingBagStore.data, item);
                    RemoveFromArr(shoppingBagStore.selectedItems, item);
                  })
                );

                shoppingBagStore.compute();
              }}
            >
              <Text fontSize={'12'}>Delete</Text>
            </Pressable>
          </Box>
        </HStack>

        {/* LIST SECTION */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack width={'full'} paddingX={'5'} space={3}>
            {/* ITEMS HERE */}
            <ShoppingBagItems override={selectedAll} />
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
                Total
              </Text>
            </VStack>
            <VStack flex={1} alignItems={'flex-end'} space={2}>
              <Text fontWeight={'bold'} color={Colors.TrademarkViolet}>
                {shoppingBagStore.selectedItems.length} Items
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P {shoppingBagStore.Subtotal}
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P {shoppingBagStore.ShippingFee}
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={12}
                color={Colors.TrademarkViolet}
              >
                P {shoppingBagStore.Total}
              </Text>
            </VStack>
          </HStack>
          <Box paddingY={4}>
            <RenderIf />
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export const ShoppingBagScreen = observer(ShoppingBag);

function RenderIf() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (shoppingBagStore.selectedItems.length !== 0) {
    return (
      <CheckOutButton onPressHandler={() => stack.navigate('CheckoutScreen')} />
    );
  } else {
    return <></>;
  }
}
