import React from 'react';
import {
  Avatar,
  Box,
  Center,
  Checkbox,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack,
  Image
} from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

const description: string = 'Apple Macbook pro 16gb ram';
const itemDetails: string = 'More details about the product.';
const price: string = 'P100,000';
const ratings: string = '5.0';
const location: string = 'Iloilo';

export function NotificationScreen({ navigation }) {
  return (
    <Box safeArea width={'full'} height={'full'} position={'absolute'}>
      <TitleAndBackButtonHeader
        title="Notification"
        onPressHandler={() => navigation.navigate('MainHomeScreen')}
      />

      <VStack paddingX={5}>
        <HStack space={'3'} marginBottom={3} justifyContent={'space-between'}>
          {/* SELECT AND DELETE ALL BUTTON */}
          <Box>
            {/* // alternative: pressing the text will also trigger onChange */}
            <Checkbox
              color={'#9B69DD'}
              borderRadius={'full'}
              borderColor={'#9B69DD'}
              style={{
                width: 15,
                height: 15
              }}
              _text={{ fontSize: '12' }}
              value={''}
            >
              Select All
            </Checkbox>
          </Box>

          <Box>
            {/* DELETE BUTTON */}
            <Pressable onPress={() => console.log('deleted')}>
              <Text fontSize={'12'}>Delete</Text>
            </Pressable>
          </Box>
        </HStack>

        {/* LIST SECTION */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={2}>
            {/* NOTIF CARD */}
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
            <NotifCard />
          </VStack>
        </ScrollView>
      </VStack>
    </Box>
  );
}

function NotifCard() {
  return (
    <VStack>
      <HStack alignItems={'center'} space={2}>
        {/* NOTIF CARD  */}

        <Checkbox
          onChange={() => console.log('SELECTED')}
          accessibilityLabel="all"
          color={'#9B69DD'}
          borderRadius={'full'}
          borderColor={'#9B69DD'}
          style={{
            width: 15,
            height: 15
          }}
        />

        {/* PHOTO PLACEHOLDER */}
        <Center width={'20'} height={'20'} backgroundColor={'muted.500'}>
          <Image
            source={{
              uri: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1569.png'
            }}
            alt="Alternate Text"
            size="full"
          />
        </Center>
        {/* TEXT PORTION */}
        <VStack flex={1}>
          <HStack justifyContent={'space-between'}>
            <Box>
              <HStack space={1}>
                <Center>
                  {/* IMAGE WRAPPER */}
                  <Avatar
                    size={'15px'}
                    source={{
                      uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'
                    }}
                  />
                </Center>
                <Center>
                  <Text fontSize={'12px'} fontWeight={'bold'}>
                    Gadget Headz
                  </Text>
                </Center>
              </HStack>
            </Box>
            <Box>
              <Text fontSize={'12px'} fontWeight={'normal'}>
                22-2-22 12:12
              </Text>
            </Box>
          </HStack>
          <Box flex={1}>
            <Text fontSize={'11px'}>
              Thank you for ordering from our shop and we will be shipping your
              item as soon as possible. Recieve by March 18 2022
            </Text>
          </Box>
        </VStack>
      </HStack>
    </VStack>
  );
}
