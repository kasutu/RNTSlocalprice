import React from 'react';
import { Box, Center, Text, VStack } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

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
        button
      </Center>
    </Box>
  );
}
