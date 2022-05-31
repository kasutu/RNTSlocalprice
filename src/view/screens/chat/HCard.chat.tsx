import {
  Container,
  HStack,
  Center,
  Avatar,
  Box,
  VStack,
  Pressable,
  Text
} from 'native-base';
import React from 'react';

export function HCardChat() {
  return (
    <>
      <Pressable onPress={() => console.log('card pressed')}>
        <Container alignItems={'center'} paddingX={2}>
          {/* CARD WRAPPER */}
          <HStack width={'full'} justifyContent={'space-around'} paddingX={'3'}>
            <Center>
              {/* IMAGE WRAPPER */}
              <Avatar
                size={'60px'}
                source={{
                  uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'
                }}
              />
            </Center>

            {/* CHAT AND NAME PART */}
            <Box flex={1} paddingX={'3'}>
              <VStack>
                <Box>
                  <Text fontWeight={'medium'} fontSize={'18'} noOfLines={1}>
                    Dave Jhaeson Alivio
                  </Text>
                </Box>
                <Box>
                  <Text fontSize={'12'} color={'gray.600'}>
                    You: Sml sir?
                  </Text>
                </Box>
                <Box>
                  {/* ORDER STATUS BADGE CONTAINER */}
                  <Center w="130px" h="4" bg="violet.600" rounded="full">
                    <Text fontSize={'10'} color={'white'}>
                      Order/s Confirmed
                    </Text>
                  </Center>
                </Box>
              </VStack>
            </Box>

            {/* CHAT DELIVERY STATUS */}
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
            </Center>
          </HStack>
        </Container>
      </Pressable>
    </>
  );
}
