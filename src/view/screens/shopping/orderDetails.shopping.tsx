import React from 'react';
import { Box, Center, Pressable, Text, VStack } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import shoppingBagStore from '../../../model/shoppingBagStrore/shoppingBagStore';
import temptransactionstore from '../../../model/transactionStore/tempTransaction';

function OrderDetailsMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <Box safeArea width={'full'} height={'full'} position={'absolute'}>
      <TitleAndBackButtonHeader title="Order Details" />
      <VStack space={8} flex={1} paddingTop={10}>
        {/* content */}

        {/* ITEM COST */}
        <VStack>
          <Center>
            <Text fontWeight={'bold'} fontSize={'16px'}>
              Prepare Total Amount
            </Text>
          </Center>
          <Center>
            <Text fontSize={35} color={'#9E6DDE'} fontWeight={'black'}>
              P {shoppingBagStore.Total}
            </Text>
          </Center>
        </VStack>

        {/* RECEIVED BY */}
        <VStack>
          <Center>
            <Text fontWeight={'bold'} fontSize={'12px'}>
              Received by
            </Text>
          </Center>
          <Center>
            <Text fontSize={10} fontWeight={'normal'}>
              {'time estimate coming soon'}
            </Text>
          </Center>
        </VStack>

        {/* ORDER ID */}
        <VStack>
          <Center>
            <Text fontWeight={'bold'} fontSize={'12px'}>
              Order ID
            </Text>
          </Center>
          <Center>
            <Text fontSize={10} fontWeight={'normal'}>
              {temptransactionstore.id}
            </Text>
          </Center>
        </VStack>
      </VStack>
      <Center padding={5}>
        {/* footer button */}
        <Pressable
          width={'250'}
          height={'45'}
          onPress={() => stack.navigate('HomeStack')}
          borderRadius={'50'}
          backgroundColor={'#9E6DDE'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text color={'white'} fontSize={'15'} fontWeight={'medium'}>
            Continue Shopping
          </Text>
        </Pressable>
      </Center>
    </Box>
  );
}

export const OrderDetailsScreen = observer(OrderDetailsMain);
