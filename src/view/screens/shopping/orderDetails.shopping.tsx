import React from 'react';
import { Box, Button, Center, Pressable, Text, VStack } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import SolidButton from '../../general/buttons/solid.button';
import { color } from 'native-base/lib/typescript/theme/styled-system';

export function OrderDetailsScreen() {
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
              {'P100,000'}
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
              {'P100,000'}
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
              {'uwoduoadowd'}
            </Text>
          </Center>
        </VStack>
      </VStack>
      <Center padding={5}>
        {/* footer button */}
        <Pressable
          width={'250'}
          height={'45'}
          onPress={() => console.log('Button Pressed')}
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
