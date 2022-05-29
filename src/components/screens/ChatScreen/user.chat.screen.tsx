import {
  NativeBaseProvider,
  VStack,
  Text,
  HStack,
  Box,
  Avatar,
  ScrollView,
  Center,
  Pressable,
  Container
} from 'native-base';
import React from 'react';
import { TitleHeader } from '../../general/header/headers';
import FilterButton from '../home/filterButton';

export default function UserChatScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Chat" />

        {/* Select all order status row */}

        <Center width={'full'} paddingY={'3'}>
          <HStack space={3}>
            {/* all filters must be sorted based on the latest activity */}

            {/* display all chat related to the user */}
            <FilterButton value="All" />

            {/* filters everything that has pending orders */}
            <FilterButton value="Orders" />

            {/* filters chats with completed status */}
            <FilterButton value="Completed" />

            {/* filters cancelled order */}
            <FilterButton value="Canceled" />
          </HStack>
        </Center>

        {/* Username and Message */}
        <ScrollView>
          <VStack flex={1} width={'full'}>
            {/* MAKE A LOOP THAT RETURNS THE CHAT CARD */}

            {
              <Pressable onPress={() => console.log('card pressed')}>
                <Container alignItems={'center'} paddingX={2}>
                  {/* CARD WRAPPER */}
                  <HStack
                    width={'full'}
                    justifyContent={'space-around'}
                    paddingX={'3'}
                  >
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
                          <Text
                            fontWeight={'medium'}
                            fontSize={'18'}
                            noOfLines={1}
                          >
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
                          <Center
                            w="130px"
                            h="4"
                            bg="violet.600"
                            rounded="full"
                          >
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
            }
          </VStack>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
}
