import React, { useEffect, useState } from 'react';
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
import {
  LocationIcon,
  solidProfileIcon
} from '../../general/icons/localprice.icons';
import { TitleHeader } from '../../general/header/headers';
import { Item, ItemCardsRenderer } from '../../render/ItemCards.renderer';
import { uuid } from '../../../api/uuid/index.uuid';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import persistedUserData from '../../../model/UserStore/persistedUserData';
import { observer } from 'mobx-react-lite';
import SolidButton from '../../general/buttons/solid.button';
import LogInButton from '../../general/buttons/logIn.button';

const uri = 'https://etech.com.pk/wp-content/uploads/2020/07/ROG.jpg';
const name = 'ROG ni dave';
const price = 6500;
const loc = 'iloilo';

const items: Item[] = [];

for (let i = 0; i < 10; i++) {
  items.push(new Item(uri, name, price, loc, uuid.v4()));
}

export function ProfileScreenMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Profile" />
        {/* USER DETAILS */}
        <VStack space={2}>
          <Center width={'full'}>
            {<Icon size={'60px'} as={solidProfileIcon} />}
          </Center>

          {/* USER DELIVERY DETAILS */}
          <VStack width={'full'} alignItems={'center'} space={'1'}>
            <Center
              width={'100px'}
              backgroundColor={'#D5C1F1'}
              borderRadius={'full'}
            >
              <Text fontSize={'11px'}>{persistedUserData.data.role}</Text>
            </Center>
            <Text fontSize={'18px'} fontWeight={'bold'}>
              {persistedUserData.data.fullName}
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
                  <Text fontSize={'12'}>
                    {persistedUserData.data.contactNumber}
                  </Text>
                </Center>
                <Center>
                  <Text fontSize={'12'}>{persistedUserData.data.email}</Text>
                </Center>
                <Center>
                  <Text fontSize={'12'}>{persistedUserData.address}</Text>
                </Center>
              </VStack>
              <Box
                marginRight={10}
                justifyContent={'center'}
                alignContent={'center'}
              >
                {/* EDIT ADDRESS */}
                <Pressable onPress={() => stack.navigate('EditAddressScreen')}>
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
        </VStack>
        <RenderUserContent condition={persistedUserData.loggedIn} />
      </Box>
    </NativeBaseProvider>
  );
}

export const ProfileScreen = observer(ProfileScreenMain);

function RenderUserContent({ condition }: { condition: boolean }) {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (condition) {
    return (
      <>
        <ScrollView>
          <Box paddingX={3} flex={1}>
            {/* USER ROLE SPECIFIED CONTENT */}
            {/* ITEM LIST CONTAINER */}
            <Box
              // container for grid effect
              flexDirection={'row'}
              flexWrap={'wrap'}
              justifyContent={'space-around'}
            >
              {/* returns an item */}
              <ItemCardsRenderer items={items} />
            </Box>
          </Box>
        </ScrollView>
      </>
    );
  } else {
    return (
      <>
        <Box flex={1}>
          <Center flex={1}>
            <Text>Please Login Your Debugging Account</Text>
          </Center>
          <Center width={'full'} bottom={5} position={'absolute'}>
            <SolidButton
              value="Login"
              onPressHandler={() => stack.navigate('LoginStack')}
            />
          </Center>
        </Box>
      </>
    );
  }
}
