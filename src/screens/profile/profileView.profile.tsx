import {
  Box,
  Center,
  HStack,
  Icon,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import React from 'react';
import { TitleHeader } from '../../components/header/headers';
import { LocationIcon, solidProfileIcon } from '../../icons/localprice.icons';

const role: string = 'Anonymous';
const fullName: string = 'Dave Jhaeson Alivio';
const phoneNumber: string = '096847236';
const email: string = 'davejhaesonalivio@localprice.com';
const address: string = 'Sool, Buntatala, leganes, Iloilo 5003';

export default function ProfileView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Profile" />
        {/* USER DETAILS */}
        <ScrollView>
          <VStack flex={1} space={2}>
            <Center width={'full'}>
              {<Icon size={'80px'} as={solidProfileIcon} />}
            </Center>
            <VStack width={'full'} alignItems={'center'} space={'1'}>
              <Center
                height={'20px'}
                width={'100px'}
                backgroundColor={'#D5C1F1'}
                borderRadius={'full'}
              >
                <Text fontSize={'11px'}>{role}</Text>
              </Center>
              <Text fontSize={'18px'} fontWeight={'bold'}>
                {fullName}
              </Text>

              {/* USER ADDRESS */}
              <HStack space={2}>
                <Center
                  justifyContent={'center'}
                  alignContent={'center'}
                  marginLeft={10}
                >
                  {/* ADDRESS ICON */}
                  {<Icon color={'black'} size={'30px'} as={LocationIcon} />}
                </Center>
                <VStack
                  paddingLeft={'2'}
                  flex={1}
                  justifyContent={'center'}
                  alignContent={'center'}
                >
                  {/* ADDRESS DETAILS */}
                  <Center>
                    <Text fontSize={'12'}>{phoneNumber}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={'12'}>{email}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={'12'}>{address}</Text>
                  </Center>
                </VStack>
                <Box
                  marginRight={10}
                  justifyContent={'center'}
                  alignContent={'center'}
                >
                  {/* EDIT ADDRESS */}
                  <Pressable onPress={() => console.log(`Edit btn click`)}>
                    <Text
                      alignSelf={'center'}
                      color={'blue.400'}
                      fontSize={'15'}
                      fontWeight={'medium'}
                    >
                      Edit
                    </Text>
                  </Pressable>
                </Box>
              </HStack>
            </VStack>
            <Box paddingX={3} flex={1} bg={'amber.200'}>
              {/* USER ROLE SPECIFIED CONTENT */}
              <Text>stuff</Text>
            </Box>
          </VStack>
        </ScrollView>

        {/* render when on anonymous user  */}
        <Center width={'full'} marginBottom={'5'}>
          {/* LOGIN AND REGISTER BUTTON */}
          <Pressable
            justifyContent={'center'}
            width={'200'}
            height={'35'}
            borderRadius={'full'}
            backgroundColor={'#9E6DDE'}
            onPress={() => console.log(`Login or Register btn click`)}
          >
            <Text
              alignSelf={'center'}
              color={'white'}
              fontSize={'15'}
              fontWeight={'medium'}
            >
              Login or Register
            </Text>
          </Pressable>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
