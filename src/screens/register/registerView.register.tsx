import React from 'react';
import {
  Box,
  Center,
  Link,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import SolidButton from '../../components/buttons/solid.button';
import TextInput from '../../components/forms/textInput.form';

export default function RegisterView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <VStack>
          <TitleAndBackButtonHeader
            title=" "
            onPressHandler={() => console.log('Sign up back btn')}
          />
          <Center marginX={20} marginY={'3'} width={'200px'} height={'50px'}>
            <Box>
              <Text color={'#9B69DD'}
              fontSize={24}
              >Sign Up</Text>
            </Box>
          </Center>
          <VStack
            maxHeight={'full'}
            height={'30%'}
            alignItems={'center'}
            space={5}
          >
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Username" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <TextInput placeholder="Confirm Password" />
          </VStack>
        </VStack>
        <Box width={'75%'} alignItems={'flex-end'} alignSelf={'center'}></Box>
        <Center
          marginY={'3'}
          bottom={'0'}
          position={'absolute'}
          width={'full'}
          maxWidth={'full'}
        >
          <SolidButton value="Register" />
          <Box>
            <Text>
              Have an account?{' '}
              <Link
                isExternal
                _text={{ color: 'blue.400' }}
                onPress={() => console.log('sign in btn click')}
              >
                Sign in
              </Link>
            </Text>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
