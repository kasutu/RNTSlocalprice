import React, { useState /* , { useState } */ } from 'react';
import {
  Box,
  Center,
  Icon,
  Image,
  Input,
  Link,
  NativeBaseProvider,
  VStack
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/headers';
import TextInput from '../../components/forms/textInput.form';
import SolidButton from './../../components/buttons/solid.button';
import { InputColor } from './../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

const appLogo = require('../../assets/appLogo.png');

export default function LogInView(/* { navigation } */) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /* const onRegisterPress = () => {
    navigation.navigate('RegisterView');
  };

  const onLogInPress = () => {}; */

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={2} width={'full'} height={'full'}>
          <TitleAndBackButtonHeader
            title=" "
            onPressHandler={() => console.log('Sign in back btn')}
          />
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
      </Box>
    </NativeBaseProvider>
  );
}
