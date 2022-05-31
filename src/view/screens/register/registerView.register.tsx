import React from 'react';
import {
  Box,
  Button,
  Icon,
  IconButton,
  Input,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack
} from 'native-base';

import { TitleAndBackButtonHeader } from '../../general/header/headers';
import TextInput from '../../general/forms/textInput.form';
import { InputColor } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';

export function RegisterScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          onPressHandler={() => console.log('Sign up back btn')}
        />
        <VStack flex={1}>
          <Box paddingBottom={'10'} alignItems={'center'} width={'full'}>
            <Text color={'#9B69DD'} fontSize={24} fontWeight={'medium'}>
              Register
            </Text>
          </Box>

          <VStack space={5} alignItems={'center'}>
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
              InputRightElement={
                <IconButton
                  icon={<Icon as={eyeIcon} />}
                  onPress={() => console.log('eye pressed ')}
                />
              }
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
              InputRightElement={
                <IconButton
                  icon={<Icon as={eyeIcon} />}
                  onPress={() => console.log('eye pressed ')}
                />
              }
            />
          </VStack>
        </VStack>
        {/* REGISTER BUTTON */}
        <Box marginBottom={5}>
          <VStack space={5} alignItems={'center'}>
            <Button
              width={'200'}
              height={'45'}
              variant={'solid'}
              onPress={() => console.log('Register Button Pressed')}
              _text={{
                fontSize: '15',
                fontWeight: 'medium'
              }}
              borderRadius={'full'}
              backgroundColor={'#9E6DDE'}
            >
              Register
            </Button>
            <Pressable onPress={() => console.log(`have an account btn click`)}>
              <Text color={'blue.400'}>Have an account?</Text>
            </Pressable>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
