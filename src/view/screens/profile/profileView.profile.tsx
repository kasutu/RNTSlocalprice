import ProfileIconButtonsFooter from '../../general/footer/profile.iconButtons.footer';
import React from 'react';
import {
  Address,
  Email,
  FullName,
  PhoneNumber,
  Role
} from '../../../model/store/user/metadata.user';
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
import Authentication from './../../../api/firebase/authentications';
import { stringifyKey } from 'mobx/dist/internal';

interface ProfileScreenProps {
  navigation: any,
  auth: Authentication
}

export function ProfileScreen({ navigation, auth }: ProfileScreenProps) {
  const [state, setState] = React.useState({
    email: ''
  });

  React.useEffect(() => {
    const user = auth.getUser();
    setState({
      email: user?.email ? user.email : '',
    })
  }, []);

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Profile" />
        {/* USER DETAILS */}
        <ScrollView>
          <VStack flex={1} space={2}>
            <Center width={'full'}>
              {<Icon size={'60px'} as={solidProfileIcon} />}
            </Center>

            {/* USER DELIVERY DETAILS */}
            <VStack width={'full'} alignItems={'center'} space={'1'}>
              <Center
                height={'20px'}
                width={'100px'}
                backgroundColor={'#D5C1F1'}
                borderRadius={'full'}
              >
                <Text fontSize={'11px'}>{Role}</Text>
              </Center>
              <Text fontSize={'18px'} fontWeight={'bold'}>
                {FullName}
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
                    <Text fontSize={'12'}>{PhoneNumber}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={'12'}>{state.email}</Text>
                  </Center>
                  <Center>
                    <Text fontSize={'12'}>{Address}</Text>
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
        <Box width={'full'} height={'80px'}>
          <ProfileIconButtonsFooter navigation={navigation} />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
