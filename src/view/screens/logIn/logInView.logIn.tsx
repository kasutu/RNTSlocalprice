import React from 'react';
import {
  Box,
  Center,
  Icon,
  Image,
  Input,
  NativeBaseProvider,
  VStack,
  Link,
  Text
} from 'native-base';

import { TitleAndBackButtonHeader } from '../../general/header/headers';
import TextInput from '../../general/forms/textInput.form';
import { InputColor } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import LogInButton from '../../general/buttons/logIn.button';
import Authentication from './../../../api/firebase/authentications';

const appLogo = require('../../../assets/appLogo.png');

interface LogInProps {
  navigation: any,
  auth: Authentication,
  route?: any,
}

export function LogInScreen(props: LogInProps) {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  });

  const onEmailChange = (text: string) => {
    setState({
      ...state,
      email: text,
    });
  }

  const onPasswordChange = (text: string) => {
    setState({
      ...state,
      password: text
    });
  }

  const loginUser = () => {
    /*
    props.auth.register('xdbruh@yahoo.com', 'aaaaaaaaaaxd')
      .then(() => {
        console.log('registered')
      })
      .catch(e => console.error(e)); */


    props.auth.login(state.email, state.password)
      .then(() => {
        console.log('logged in');
        props.navigation.navigate(props.route.params?.destination);
      })
      .catch(e => console.error(e));
  }

  if (props.auth.isReady() && props.route?.destination !== '') {
    props.navigation.navigate(props.route.params?.destination);
    return (<NativeBaseProvider></NativeBaseProvider>);
  }

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
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
            <TextInput placeholder="Email" onChangeText={onEmailChange} />
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
              onChangeText={onPasswordChange}
            />
          </VStack>
          {/* LOG IN BUTTON */}
          <Center paddingY={'8'} width={'full'} maxWidth={'full'}>
            <VStack space={'5'}>
              <LogInButton onPress={loginUser} />
              <Center>
                <Link
                  isExternal
                  _text={{ color: 'blue.400' }}
                  onPress={() => props.navigation.navigate('RegisterScreen')}
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
