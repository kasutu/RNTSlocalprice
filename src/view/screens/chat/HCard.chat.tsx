import {
  HStack,
  Center,
  Avatar,
  Box,
  VStack,
  Pressable,
  Text
} from 'native-base';
import React from 'react';
import { BadgeProps, HCardProps } from '../../../types/types';
import { Colors } from '../../general/colors/localprice.colors';

export function HCardChat({
  onCardPress,
  name,
  ImageUri,
  status,
  lastMsg
}: HCardProps) {
  return (
    <>
      <Pressable
        width={'full'}
        onPress={() =>
          onCardPress ? onCardPress : console.log('card pressed')
        }
      >
        <Box width={'full'} alignItems={'center'}>
          {/* CARD WRAPPER */}
          <HStack
            width={'full'}
            justifyContent={'space-around'}
            paddingY={2}
            paddingX={'3'}
          >
            <Center>
              {/* IMAGE WRAPPER */}
              <Avatar
                size={'50px'}
                source={{
                  uri: ImageUri
                }}
              />
            </Center>

            {/* CHAT AND NAME PART */}
            <Box flex={1} paddingX={'3'}>
              <VStack>
                <Box>
                  <Text fontWeight={'medium'} fontSize={'16'} noOfLines={1}>
                    {name}
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight={'normal'}
                    fontSize={'10'}
                    color={'gray.600'}
                  >
                    {lastMsg}
                  </Text>
                </Box>
                <Box>
                  {/* ORDER STATUS BADGE CONTAINER */}
                  <StatusBadge status={status} />
                </Box>
              </VStack>
            </Box>

            {/* CHAT DELIVERY STATUS
            <Center paddingX={3}>
              <HStack space={'2'} alignItems={'center'}>
                <Box
                  borderRadius={'full'}
                  bg={'violet.300'}
                  rounded={'full'}
                  size={'2'}
                />
                <Text fontSize={'10'}>Now</Text>
              </HStack>
            </Center> */}
          </HStack>
        </Box>
      </Pressable>
    </>
  );
}

export function StatusBadge({ status }: BadgeProps) {
  if (status === 'confirmed') {
    return (
      <>
        <Center w="80px" h="4" bg={Colors.DarkViolet} rounded="full">
          <Text fontWeight={'medium'} fontSize={'9'} color={'white'}>
            {'Confirmed'}
          </Text>
        </Center>
      </>
    );
  } else if (status === 'canceled') {
    return (
      <>
        <Center
          w="80px"
          h="4"
          bg={Colors.White}
          borderColor={Colors.Red}
          borderWidth={'1px'}
          rounded="full"
        >
          <Text fontWeight={'medium'} fontSize={'9'} color={Colors.Red}>
            {'Canceled'}
          </Text>
        </Center>
      </>
    );
  } else if (status === 'unconfirmed') {
    return (
      <>
        <Center w="90px" h="4" bg={Colors.Red} rounded="full">
          <Text fontWeight={'medium'} fontSize={'9'} color={'white'}>
            {'Unconfirmed'}
          </Text>
        </Center>
      </>
    );
  } else {
    return <></>;
  }
}
