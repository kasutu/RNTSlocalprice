import React from 'react';
import {
  Box,
  Icon,
  IconButton,
  Input,
  NativeBaseProvider,
  Link,
  Text,
  VStack,
  Center
} from 'native-base';

import { TitleAndBackButtonHeader } from '../../general/header/headers';
import TextInput from '../../general/forms/textInput.form';
import { Colors } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import RegisterButton from '../../general/buttons/register.button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';

export function RegisterScreen() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader onPressHandler={() => stack.goBack()} />
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
              bgColor={Colors.LightViolet}
              borderColor={Colors.LightViolet}
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
              bgColor={Colors.LightViolet}
              borderColor={Colors.LightViolet}
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
            <RegisterButton />
            <Center>
              <Link
                isExternal
                _text={{ color: 'blue.400' }}
                onPress={() => stack.navigate('LogInScreen')}
              >
                Have an account?
              </Link>
            </Center>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
