import {
  HStack,
  Center,
  Avatar,
  Box,
  VStack,
  Text,
  IconButton,
  Pressable
} from 'native-base';
import React from 'react';
import { arrowBack } from '../../general/icons/localprice.icons';

export function ChatHeaderAvatar() {
  return (
    <>
      <HStack alignItems="center">
        <IconButton
          icon={arrowBack}
          onPress={() => console.log('BACK pressed ')}
        />

        {/* CARD WRAPPER */}
        <HStack>
          <Center>
            {/* IMAGE WRAPPER */}
            <Avatar
              size={'45px'}
              source={{
                uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'
              }}
            />
          </Center>

          {/* CHAT AND NAME PART */}
          <Box paddingX={'3'}>
            <VStack space={1}>
              <Box>
                <Text fontWeight={'medium'} fontSize={'15'} noOfLines={1}>
                  {'Dave Jhaeson Alivio'}
                </Text>
              </Box>

              <Box>
                {/* ORDER STATUS BADGE CONTAINER */}
                <Center w="130px" h="4" bg="#8244D5" rounded="full">
                  <Text fontSize={'10'} color={'white'}>
                    {'Order/s Confirmed'}
                  </Text>
                </Center>
              </Box>
            </VStack>
          </Box>
        </HStack>

        {/* details */}
        <Box paddingX={6} flex={1} alignItems={'flex-end'}>
          <Pressable onPress={() => console.log('Details button')}>
            <Text color={'violet.800'} fontWeight={'bold'} fontSize={'13'}>
              Details
            </Text>
          </Pressable>
        </Box>
      </HStack>
    </>
  );
}
