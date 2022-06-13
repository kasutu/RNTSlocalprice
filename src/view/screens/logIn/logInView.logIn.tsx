import React, { useState } from 'react';
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
import { Colors } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import LogInButton from '../../general/buttons/logIn.button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import { login } from '../../../api/firebase/authentications';
import persistedUserData from '../../../model/UserStore/persistedUserData';
import { runInAction } from 'mobx';
import { Alert, AlertButton, Keyboard } from 'react-native';
import { observer } from 'mobx-react-lite';
import { storeData } from '../../../api/mmkv';
import userStore from '../../../model/UserStore/UserStore';

const appLogo = require('../../../assets/appLogo.png');

export function LogInScreenMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginHandler() {
    if (email === '' || password === '') {
      triggerAlert(
        'Just trying the buttons mate?',
        'Please enter a valid email or password. NOW!',
        [
          {
            text: `i'll do it`
          }
        ]
      );
    } else {
      login(email, password)
        .then((response) => {
          Keyboard.dismiss();

          runInAction(() => {
            userStore.pullFromServer(response.user.uid);
            userStore.id = response.user.uid;
            storeData('loginData', response.user);
            storeData('loginStatus', true);
          });

          setEmail('');
          setPassword('');

          stack.navigate('ProfileScreen');
        })
        .catch(() => {
          triggerAlert(
            'Well well',
            `Couldn't find your Localprice Account tho`,
            [
              {
                text: 'aight!'
              }
            ]
          );
        });
    }
  }

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          /* onPressHandler={() => navigation.navigate('MainHomeScreen')} */
          onPressHandler={() => stack.goBack()}
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
            <TextInput
              placeholder="Email"
              value={email}
              onChangeHandler={(text) => setEmail(text)}
            />
            <Input
              variant="filled"
              placeholder={'Password'}
              placeholderTextColor={'black'}
              maxWidth={'75%'}
              height={'8'}
              bgColor={Colors.LightViolet}
              borderColor={Colors.LightViolet}
              borderRadius={'5'}
              textAlignVertical={'center'}
              InputRightElement={<Icon mr={2} as={eyeIcon} />}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </VStack>
        </VStack>
        {/* LOG IN BUTTON */}
        <Box
          flex={1}
          width={'full'}
          justifyContent={'center'}
          alignItems={'center'}
          position={'absolute'}
          bottom={5}
        >
          <VStack space={'5'}>
            <LogInButton onPressHandler={() => loginHandler()} />
            <Center>
              <Link
                isExternal
                _text={{ color: 'blue.400' }}
                onPress={() => stack.navigate('RegisterScreen')}
              >
                Don't have an account?
              </Link>
            </Center>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

export const LogInScreen = observer(LogInScreenMain);

function triggerAlert(header: string, msg: string, buttons?: AlertButton[]) {
  Alert.alert(header, msg, buttons);
}
