import React, { useState /* , { useState } */ } from 'react';
import {
  Text,
  Box,
  Center,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  Pressable,
  VStack,
  Button,
  Link
} from 'native-base';

import { TitleAndBackButtonHeader } from '../../general/header/headers';
import TextInput from '../../general/forms/textInput.form';
import { InputColor } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import SolidButton from '../../general/buttons/solid.button';

const appLogo = require('../../../assets/appLogo.png');

export function LogInScreen(/* { navigation } */) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* const onRegisterPress = () => {
    navigation.navigate('RegisterView');
  };

  const onLogInPress = () => {}; */

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
          <VStack flex={1} alignItems={'center'} space={5}>
            <TextInput
              value={email}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
            />
            <Input
              variant="filled"
              value={password}
              placeholder={'Password'}
              onChangeText={(text) => setPassword(text)}
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
          <Center paddingY={'8'} width={'full'} maxWidth={'full'}>
            <VStack space={'5'}>
              <SolidButton /* {...onLogInPress} */ value="Log In" />
              <Center>
                <Link
                  isExternal
                  _text={{ color: 'blue.400' }}
                  /* {...onRegisterPress} */
                  onPress={() => console.log(`Don't have an account btn click`)}
                >
                  Don't have an account?
                </Link>
              </Center>
            </VStack>
          </Center>
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
