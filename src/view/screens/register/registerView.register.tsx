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
import { InputColor } from '../../general/colors/localprice.colors';
import { eyeIcon } from '../../general/icons/localprice.icons';
import RegisterButton from '../../general/buttons/register.button';
import Authentication from '../../../api/firebase/authentications';

/* interface LogInProps {
  navigation: any;
  auth: Authentication;
  route?: any;
}
 */
export function RegisterScreen(/* props: LogInProps */) {
  /* const [state, setState] = React.useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const onFullNameChange = (text: string) => {
    setState({
      ...state,
      fullName: text
    });
  };

  const onUserNameChange = (text: string) => {
    setState({
      ...state,
      userName: text
    });
  };

  const onEmailChange = (text: string) => {
    setState({
      ...state,
      email: text
    });
  };

  const onPasswordChange = (text: string) => {
    setState({
      ...state,
      password: text
    });
  };

  const onConfirmPasswordChange = (text: string) => {
    setState({
      ...state,
      confirmPassword: text
    });
  };
 */
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleAndBackButtonHeader
          onPressHandler={() => navigation.navigate('LogInScreen')}
        />
        <VStack flex={1}>
          <Box paddingBottom={'10'} alignItems={'center'} width={'full'}>
            <Text color={'#9B69DD'} fontSize={24} fontWeight={'medium'}>
              Register
            </Text>
          </Box>

          <VStack space={5} alignItems={'center'}>
            <TextInput
              placeholder="Full Name"
              /* onChangeText={onFullNameChange} */
            />
            <TextInput placeholder="Username" /* onChangeText={onUserNameChange}  *//>
            <TextInput placeholder="Email" /* onChangeText={onEmailChange} */ />
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
              /* onChangeText={onPasswordChange} */
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
             /*  onChangeText={onConfirmPasswordChange} */
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
                onPress={() => navigation.navigate('LogInScreen')}
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
