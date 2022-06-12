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
import { uuid } from '../../../api/uuid/index.uuid';
import { Colors } from '../../general/colors/localprice.colors';
import { Item, ShoppingBagItems } from '../../render/ShoppingBagCards';
import shoppingBagStore from '../../../model/shoppingBagStrore/shoppingBagStore';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { RemoveFromArr } from '../../../model/common/utils';

// simulating json data comes from the server
const uri = 'https://etech.com.pk/wp-content/uploads/2020/07/ROG.jpg';
const name = 'Apple Magic Mouse adwiowdhahwdoadhoahdhoaiwdhoad';
const price = 6500;
const loc = 'iloilo';
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias. Odit non accusamus quam, sit porro illo nemo optio est excepturi. Veniam sapiente, aliquid nobis sit ipsa eligendi laudantium odio?';

for (let i = 0; i < 10; i++) {
  // data from the server comes and gets converted into an object
  runInAction(() => {
    shoppingBagStore.data.push(
      new Item(uri, name, description, price, loc, 1, uuid.v4())
    );
  });
}

export function ShoppingBag() {
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader title="Shopping bag" />

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
            <CheckOutButton
              onPressHandler={() => console.log('proceeed to checkout')}
            />
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export const ShoppingBagScreen = observer(ShoppingBag);
