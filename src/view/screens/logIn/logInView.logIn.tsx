import React from 'react';
import {
  Box,
  Center,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  VStack,
  Link
} from 'native-base';

import { TitleAndBackButtonHeader } from '../../general/header/headers';
import TextInput from '../../general/forms/textInput.form';
import { InputColor } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import LogInButton from '../../general/buttons/logIn.button';

const appLogo = require('../../../assets/appLogo.png');

export function LogInScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        r
        <TitleAndBackButtonHeader
          /* onPressHandler={() => navigation.navigate('MainHomeScreen')} */
          onPressHandler={() => console.log('Proceed to MainHomeScreen')}
        />
        <VStack flex={1} alignItems={'center'} space={5}>
          <Center paddingY={'3'} width={'full'} height={'200px'}>
            {/* LOGO HERE */}
            <Image
              width={'250'}
              resizeMode="contain"
              alt="App Logo"
              source={appLogo}
            />
          </Center>
          <VStack flex={1} alignItems={'center'} space={5}>
            <TextInput placeholder="Email" />
            <Input
              variant="filled"
              placeholder={'Password'}
              placeholderTextColor={'black'}
              maxWidth={'75%'}
              height={'8'}
              bgColor={InputColor}
              borderColor={InputColor}
              borderRadius={'5'}
              textAlignVertical={'center'}
              InputRightElement={<Icon mr={2} as={eyeIcon} />}
            />
          </VStack>
          {/* LOG IN BUTTON */}
          <Center paddingY={'8'} width={'full'} maxWidth={'full'}>
            <VStack space={'5'}>
              <LogInButton navigation={navigation} />
              <Center>
                <Link
                  isExternal
                  _text={{ color: 'blue.400' }}
                  onPress={() => navigation.navigate('RegisterScreen')}
                >
                  Don't have an account?
                </Link>
              </Center>
            </VStack>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
