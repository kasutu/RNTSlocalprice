import React from 'react';
import {
  Box,
  Center,
  Icon,
  Input,
  Link,
  NativeBaseProvider,
  VStack
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import TextInput from '../../components/forms/textInput.form';
import SolidButton from './../../components/buttons/solid.button';
import { InputColor } from './../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

export default function LogInView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <VStack space={2} width={'full'} height={'full'}>
          <TitleAndBackButtonHeader
            title=" "
            onPressHandler={() => console.log('Sign in back btn')}
          />
          <Center
            marginY={'3'}
            width={'full'}
            height={'200px'}
            backgroundColor={'violet.300'}
          >
            {' '}
            Logo
          </Center>
          <VStack maxHeight={'full'} alignItems={'center'} space={5}>
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
          <Box width={'75%'} alignItems={'flex-end'} alignSelf={'center'}>
            <Link
              isExternal
              _text={{ color: 'blue.400' }}
              onPress={() => console.log('sign up btn click')}
            >
              Forgot Password
            </Link>
          </Box>
          <Center
            marginY={'3'}
            bottom={'40px'}
            position={'absolute'}
            width={'full'}
            maxWidth={'full'}
          >
            <SolidButton value="Log In" />
           { <Center>
              <Link
                isExternal
                _text={{ color: 'blue.400' }}
                onPress={() => console.log('sign up btn click')}
              >
                Don't have an account?
              </Link>
            </Center>}
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
