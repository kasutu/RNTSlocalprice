import React from 'react';
import {
  Text,
  Box,
  Center,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  NativeBaseProvider,
  Pressable,
  VStack,
  Button
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/headers';
import TextInput from '../../components/forms/textInput.form';
import SolidButton from './../../components/buttons/solid.button';
import { InputColor } from './../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

const appLogo = require('../../assets/appLogo.png');

export default function LogInView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          onPressHandler={() => console.log('Sign in back btn')}
        />

        <VStack flex={1} alignItems={'center'} space={5} bg={'amber.400'}>
          <Center paddingY={'3'} width={'full'} height={'200px'}>
            {/* LOGO HERE */}
            <Image
              width={'250'}
              resizeMode="contain"
              alt="App Logo"
              source={appLogo}
            />
          </Center>

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
            InputRightElement={
              // EYE ICON BUTTON
              <IconButton
                icon={<Icon as={eyeIcon} />}
                onPress={() => console.log('eye pressed ')}
              />
            }
          />
          <Box
            width={'75%'}
            alignItems={'flex-end'}
            alignSelf={'center'}
            bg={'blue.900'}
          >
            <Pressable onPress={() => console.log(`Forgot Password btn click`)}>
              <Text color={'blue.400'}>Forgot Password</Text>
            </Pressable>
          </Box>
        </VStack>

        <Box bg={'black'}>
          {/* LOGIN BUTTON */}
          <VStack space={'5'} alignItems={'center'}>
            <Button
              width={'200'}
              height={'45'}
              variant={'solid'}
              onPress={() => console.log('Login Button Pressed')}
              _text={{
                fontSize: '15',
                fontWeight: 'medium'
              }}
              borderRadius={'full'}
              backgroundColor={'#9E6DDE'}
            >
              Login
            </Button>
            <Pressable
              onPress={() => console.log(`Don't have an account btn click`)}
            >
              <Text color={'blue.400'}>Don't have an account?</Text>
            </Pressable>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
