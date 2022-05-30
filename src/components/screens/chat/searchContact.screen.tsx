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
import { SearchHeader } from '../../general/header/headers';

export function SearchContactScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <SearchHeader />

        {/* Username and Message */}
        <ScrollView>
          <VStack flex={1} width={'full'}>
            {/* MAKE A LOOP THAT RETURNS THE CHAT CARD */}

            {
              <Pressable onPress={() => console.log('card pressed')}>
                <Container alignItems={'center'} paddingX={2}>
                  {/* CARD CONTAINER */}
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
                    <Box flex={1} paddingX={'3'} justifyContent={'center'}>
                      <Box>
                        <Text
                          fontWeight={'medium'}
                          fontSize={'18'}
                          noOfLines={1}
                        >
                          Dave Jhaeson Alivio
                        </Text>
                      </Box>
                    </Box>
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
