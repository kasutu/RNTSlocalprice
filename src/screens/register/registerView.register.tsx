import React from 'react';
import {
  Box,
  Center,
  Icon,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import SolidButton from '../../components/buttons/solid.button';
import TextInput from '../../components/forms/textInput.form';
import { InputColor } from '../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

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
              <Text color={'#9B69DD'} fontSize={24}>
                Sign Up
              </Text>
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
            <Input
              variant="filled"
              placeholder={'Confirm Password'}
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
        </VStack>
        <Box width={'75%'} alignItems={'flex-end'} alignSelf={'center'}></Box>
        <Center
          marginY={'3'}
          bottom={'5'}
          position={'absolute'}
          width={'full'}
          maxWidth={'full'}
        >
          <SolidButton value="Register" />
          <Box>
            <Link
              isExternal
              _text={{ color: 'blue.400' }}
              onPress={() => console.log('sign in btn click')}
            >
              Have an account?
            </Link>
          </Box>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
